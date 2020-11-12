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

// @todo: change pour coordinates
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
    shareMessage: {
      type: String,
      required: false,
    },
    isUpComing: {
      type: Boolean,
      required: false,
    },
    isTemporary: {
      type: Boolean,
      required: false,
    },
    declarativeValidation: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);
const CollectingPoint = mongoose.model('collectingPoint', CollectingPointSchema);

module.exports = { CollectingPoint, RewardsSchema };
