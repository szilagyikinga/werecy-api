const mongoose = require('mongoose');

const establishmentModel = require('../establishment/establishment.model');

const WETSUIT = 'wetsuit';
const TONER = 'toner';
const CAMERA = 'camera';
const SMARTPHONE = 'smartphone';
const TABLET = 'tablet';
const BATTERY = 'battery';
const MOD = 'mod';
const LEATHER = 'leather';
const BULK = 'bulk';
const JEAN = 'jean';

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
    establishment: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'establishment',
      required: true,
    },
    article: {
      type: String,
      required: true,
      enum: [CAMERA, BATTERY, LEATHER, MOD, SMARTPHONE, TABLET, BULK, WETSUIT, JEAN, TONER],
    },
    label: {
      type: String,
      required: true,
    },
    successLabel: {
      type: String,
      required: true,
    },
    reward: {
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
    rewards: {
      type: RewardsSchema,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },

    // copy of the establishment's location for faster sorting
    location: {
      type: establishmentModel.LocationSchema,
      required: true,
    },
    // copy of the establishment's location for faster sorting
    types: {
      type: [String],
      enum: [
        establishmentModel.FASHON,
        establishmentModel.BOOK,
        establishmentModel.ECIGARETTE,
        establishmentModel.SPORT,
        establishmentModel.HIGHTECH,
        establishmentModel.FOOD,
        establishmentModel.OFFICE,
      ],
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

CollectingPointSchema.index({ location: '2dsphere' });
CollectingPointSchema.index({ label: 'text' }, { default_language: 'french' });
CollectingPointSchema.virtual('id').get(function () {
  return this._id;
});

const CollectingPoint = mongoose.model('collectingPoint', CollectingPointSchema);

module.exports = {
  CollectingPoint,
  RewardsSchema,
  CAMERA,
  BATTERY,
  LEATHER,
  MOD,
  SMARTPHONE,
  TABLET,
  BULK,
  WETSUIT,
  JEAN,
  TONER,
};
