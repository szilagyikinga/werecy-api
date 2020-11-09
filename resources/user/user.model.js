const mongoose = require('mongoose');

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
      enum: ['facebook', 'google'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
