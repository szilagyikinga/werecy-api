const mongoose = require('mongoose');
const establishmentModel = require('../establishment/establishment.model');

const RewardItemSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  reward: {
    type: String,
    required: true,
  },
});

const RewardsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: [RewardItemSchema],
    default: undefined,
  },
  note: {
    type: String,
    required: false,
  },
});

const CollectingPointSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    article: {
      type: String,
      required: true,
      enum: ['camera', 'battery', 'leather', 'mod', 'smartphone', 'tablet', 'bulk', 'wetsuit', 'jean', 'toner'],
    },
    successLabel: {
      type: String,
      required: true,
    },
    reward: {
      type: String,
      required: true,
    },
    rewards: {
      type: RewardsSchema,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },
    successWhen: {
      type: String,
      required: false,
    },
    successWhere: {
      type: String,
      required: false,
    },
    shareMessage: {
      type: String,
      required: false,
    },
    establishment: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'establishment',
      required: true,
    },
    // copy of the establishment's location for faster sorting
    location: {
      type: establishmentModel.LocationSchema,
      required: true,
    },
  },
  { timestamps: true }
);

CollectingPointSchema.index({ location: '2dsphere' });
const CollectingPoint = mongoose.model('collectingPoint', CollectingPointSchema);

module.exports = { CollectingPoint, RewardsSchema };
