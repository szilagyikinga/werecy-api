const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const config = require('../config');
const User = require('../resources/user/user.model');
const appConfig = require('../config/appConfig');

const googleClient = new OAuth2Client(appConfig.googleApi.id);

const newToken = (user) => {
  return jwt.sign({ email: user.email, id: '1' }, config.secrets.jwt, {
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

const signIn = async (req, res) => {
  const { token, provider } = req.body;
  if (!token) {
    return res.status(400).send({ message: 'Missing token' });
  }
  let user;
  try {
    // @todo check if provider is the same as saved
    if (provider === 'google') {
      user = await verifyGoogleIdToken(token);
    } else if (provider === 'facebook') {
      user = await verifyFacebookToken(token);
    }
    if (!user.email) return res.status(500).end();
    const savedUser = await User.findOne({ email: user.email }).select('email').exec();
    if (!savedUser) {
      await User.create(user);
    }
    return res.status(201).send({ token: newToken({ email: user.email }) });
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

  // const user = await User.findById(payload.id).lean().exec();

  // if (!user) {
  //   return res.status(401).end();
  // }

  // req.user = user;
  next();
};

module.exports = {
  protect,
  signIn,
};
