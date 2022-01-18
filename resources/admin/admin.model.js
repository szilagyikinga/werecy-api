const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    superAdmin: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const TokenSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'admins',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

AdminSchema.index({ location: '2dsphere' });
// eslint-disable-next-line camelcase
AdminSchema.index({ name: 'text', email: 'text' }, { default_language: 'french' });

const Admin = mongoose.model('admins', AdminSchema);
const Token = mongoose.model('tokens', TokenSchema);

module.exports = { Admin, Token };
