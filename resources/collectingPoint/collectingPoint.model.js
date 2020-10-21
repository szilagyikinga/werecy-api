const mongoose = require('mongoose');

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

const CollectingSchema = new mongoose.Schema({
  article: {
    type: String,
    required: false,
    enum: ['camera', 'battery', 'leather', 'mod', 'smartphone', 'tablet', 'bulk', 'wetsuit', 'jean'],
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
  collecting: {
    type: String,
    required: true,
  },
});

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
});

const CoordonatesSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

const CollectingPointSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: AddressSchema,
      required: true,
    },
    coordonates: {
      type: CoordonatesSchema,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    collectings: {
      type: [CollectingSchema],
      default: undefined,
    },
  },
  { timestamps: true }
);
const CollectingPoint = mongoose.model('collectingPoint', CollectingPointSchema);

module.exports = { CollectingPoint };
