const mongoose = require('mongoose');

const establishmentModel = require('../establishment/establishment.model');

// v1 articles
const WETSUIT = 'wetsuit';
const TONER = 'toner';
const SMARTPHONE = 'smartphone';
const BATTERY = 'battery';
const MOD = 'mod';
const BULK = 'bulk';
const JEAN = 'jean';
// v2 extra articles
const TENNIS_BALL = 'tennis_ball';
const CLIMBING_ROPES = 'climbing_ropes';
const HUNTING_CARTRIDGES = 'hunting_cartridges';
const BICYCLE_BATTERY = 'bicycle_battery';
const INNER_TUBE = 'inner_tube';
const BOOTS = 'boots';
const SWIMSUIT = 'swimsuit';
const PUFF = 'puff';

const v1Articles = [WETSUIT, TONER, SMARTPHONE, BATTERY, MOD, BULK, JEAN];
const v2Articles = [
  TENNIS_BALL,
  CLIMBING_ROPES,
  HUNTING_CARTRIDGES,
  BICYCLE_BATTERY,
  INNER_TUBE,
  BOOTS,
  SWIMSUIT,
  PUFF,
];

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
      enum: [
        BATTERY,
        MOD,
        SMARTPHONE,
        BULK,
        WETSUIT,
        JEAN,
        TONER,
        TENNIS_BALL,
        CLIMBING_ROPES,
        HUNTING_CARTRIDGES,
        BICYCLE_BATTERY,
        INNER_TUBE,
        BOOTS,
        SWIMSUIT,
        PUFF,
      ],
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
  BATTERY,
  MOD,
  SMARTPHONE,
  BULK,
  WETSUIT,
  JEAN,
  TONER,
  TENNIS_BALL,
  CLIMBING_ROPES,
  HUNTING_CARTRIDGES,
  BICYCLE_BATTERY,
  INNER_TUBE,
  BOOTS,
  SWIMSUIT,
  PUFF,
  v1Articles,
  v2Articles,
};
