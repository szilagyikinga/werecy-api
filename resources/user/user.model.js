const mongoose = require('mongoose');

const FACEBOOK = 'facebook';
const APPLE = 'apple';
const GOOGLE = 'google';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    locale: {
      type: String,
      required: false,
    },
    picture: {
      type: String,
      required: false,
    },
    provider: {
      type: String,
      required: true,
      enum: [FACEBOOK, GOOGLE, APPLE],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;

module.exports = { User, FACEBOOK, APPLE, GOOGLE };
