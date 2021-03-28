const jwt = require('jsonwebtoken');
const NodeRSA = require('node-rsa');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const config = require('../config');
const model = require('../resources/user/user.model');
const appConfig = require('../config/appConfig');

const googleClient = new OAuth2Client(appConfig.googleApi.id);

const newToken = (id) => {
  return jwt.sign({ id: id.toString() }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp,
  });
};

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

async function _getApplePublicKeys() {
  return axios
    .request({
      method: 'GET',
      url: 'https://appleid.apple.com/auth/keys',
    })
    .then((response) => response.data.keys);
}

const getAppleUserId = async (token) => {
  const keys = await _getApplePublicKeys();
  const decodedToken = jwt.decode(token, { complete: true });
  const kid = decodedToken.header.kid;
  const key = keys.find((k) => k.kid === kid);

  const pubKey = new NodeRSA();
  pubKey.importKey({ n: Buffer.from(key.n, 'base64'), e: Buffer.from(key.e, 'base64') }, 'components-public');
  const userKey = pubKey.exportKey(['public']);

  return jwt.verify(token, userKey, {
    algorithms: 'RS256',
  });
};

const verifyGoogleIdToken = async (token) => {
  const ticket = await googleClient.verifyIdToken({
    idToken: token,
    audience: appConfig.googleApi.clientIds,
  });
  const { email, name, family_name: lastName, given_name: firstName, locale, picture } = ticket.getPayload();
  return { email, name, lastName, firstName, locale, picture, origin: 'google' };
};

const verifyFacebookToken = async (token) => {
  const user = await axios.get(
    `https://graph.facebook.com/me?fields=email,last_name,first_name,name&access_token=${token}`
  );
  const { email, name, last_name: lastName, first_name: firstName } = user.data;
  return { email, name, lastName, firstName, origin: 'facebook' };
};

const verifyAppleToken = async (token) => {
  const user = await getAppleUserId(token);
  return { email: user.email };
};

const signIn = async (req, res) => {
  const { token, provider, firstName, lastName, id } = req.body;
  if (!token) {
    return res.status(400).send({ message: 'Missing token' });
  }
  let user = {};
  let newUser = {};
  try {
    if (provider === model.GOOGLE) {
      user = await verifyGoogleIdToken(token);
    } else if (provider === model.FACEBOOK) {
      user = await verifyFacebookToken(token);
    } else if (provider === model.APPLE) {
      user = await verifyAppleToken(token);
      user.firstName = firstName;
      user.lastName = lastName;
    }
    if (!user.email) return res.status(500).end();
    const savedUser = await model.User.findOne({ email: user.email, provider }).exec();
    if (!savedUser) {
      newUser = await model.User.create({ ...user, provider });
    }
    return res.status(201).send({ token: newToken(savedUser ? savedUser._id : newUser._id) });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).end();
  }
  const token = bearer.split('Bearer ')[1].trim();
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).end();
  }
  const user = await model.User.findOne({ _id: payload.id }).lean().exec();
  if (!user) {
    return res.status(401).end();
  }
  req.user = user;
  next();
};

module.exports = {
  protect,
  signIn,
};
