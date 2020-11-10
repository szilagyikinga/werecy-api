const mongoose = require('mongoose');
const collectingPointModel = require('../collectingPoint/collectingPoint.model');

const CollectingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    collectingPoint: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'collectingPoint',
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ['pending', 'validated'],
      default: 'pending',
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

module.exports = { Collecting };
