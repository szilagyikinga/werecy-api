const express = require('express');
const router = express.Router();

const verifyToken = async (token) => {
  if (token !== 'xxx') throw new Error('Not valid token');
};

const admin = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).end();
  }
  const token = bearer.split('Bearer ')[1].trim();
  try {
    await verifyToken(token);
  } catch (err) {
    console.error(err);
    return res.status(401).end();
  }
  next();
};

router.post('', (req, res, next) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    return res.status(200).json({
      token: 'xxx',
      id: '1',
      fullName: 'Admin',
    });
  }

  return res.status(401).end();
});

// const admin = async (req, res, next) => {
//   const bearer = req.headers.authorization;
//   if (!bearer || !bearer.startsWith('Bearer ')) {
//     return res.status(401).end();
//   }
//   const token = bearer.split('Bearer ')[1].trim();
//   try {
//     await verifyToken(token);
//   } catch (err) {
//     console.error(err);
//     return res.status(401).end();
//   }
//   next();
// };

module.exports = { admin, authenticate: router };
