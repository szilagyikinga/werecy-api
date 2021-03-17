const mongoose = require('mongoose');
const collectingPointModel = require('../collectingPoint/collectingPoint.model');

const STATE_PENDING = 'pending';
const STATE_VALIDATED = 'validated';
const STATE_CANCELED = 'canceled';

const CollectingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    establishment: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'establishment',
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: [STATE_PENDING, STATE_VALIDATED, STATE_CANCELED],
      default: STATE_PENDING,
    },
    validatedAt: {
      type: Date,
      required: false,
    },
    canceledAt: {
      type: Date,
      required: false,
    },
    article: {
      type: String,
      required: true,
      enum: ['camera', 'battery', 'leather', 'mod', 'smartphone', 'tablet', 'bulk', 'wetsuit', 'jean', 'toner'],
    },
    reward: {
      type: String,
      required: true,
    },
    rewards: {
      type: collectingPointModel.RewardsSchema,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Collecting = mongoose.model('collecting', CollectingSchema);

module.exports = { Collecting, STATE_PENDING, STATE_VALIDATED, STATE_CANCELED };
