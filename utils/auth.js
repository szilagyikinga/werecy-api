const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../resources/user/user.model');

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

const signIn = async (req, res) => {
  const { email, secret } = req.body;
  if (!email) {
    return res.status(400).send({ message: 'need email' });
  }
  try {
    // const user = await User.findOne({ email: email }).select('email').exec();
    // if (!user) {
    //   const user = await User.create(req.body);
    // }
    const user = { email };
    const token = newToken(user);
    return res.status(201).send({ token });
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
    console.log(payload, 'payload');
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
