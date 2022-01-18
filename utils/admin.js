const express = require('express');
const router = express.Router();
const { Admin, Token } = require('../resources/admin/admin.model');
const bcrypt = require('bcrypt');

const verifyToken = async (tokenId) => {
  const token = await Token.findById(tokenId).exec();

  if (!token) {
    throw new Error('Token not found');
  }

  if (token.createdAt.getTime + 1000 * 3600 * 24 > Date.now()) {
    throw new Error('Token expired');
  }

  return token;
};

const admin = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).end();
  }
  const tokenValue = bearer.split('Bearer ')[1].trim();
  try {
    const token = await verifyToken(tokenValue);
    req.token = token;
  } catch (err) {
    console.error(err);
    return res.status(401).end();
  }
  next();
};

router.post('', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ email: username });
    if (!admin) {
      throw new Error('Not found');
    }

    if (!bcrypt.compareSync(password, admin.hash)) {
      throw new Error('Wrong password');
    }

    const token = new Token({ admin: admin._id }, true);
    await token.save();

    return res.status(200).json({
      token: token._id,
      id: token._id,
      fullName: admin.name,
      ...admin,
    });
  } catch (err) {
    console.err('Authentication failed', err);
    return res.status(401).end();
  }
});

module.exports = { admin, authenticate: router };
