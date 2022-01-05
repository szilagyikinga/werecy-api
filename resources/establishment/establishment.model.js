const mongoose = require('mongoose');

const FASHON = 'fashon';
const BOOK = 'book';
const ECIGARETTE = 'ecigarette';
const SPORT = 'sport';
const HIGHTECH = 'hightech';
const FOOD = 'food';
const OFFICE = 'office';

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

const LocationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const EstablishmentSchema = new mongoose.Schema(
  {
    _id: { type: String, alias: 'id' },
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    types: {
      type: [String],
      enum: [FASHON, BOOK, ECIGARETTE, SPORT, HIGHTECH, FOOD, OFFICE],
      required: false,
    },
    address: {
      type: AddressSchema,
      required: true,
    },
    location: {
      type: LocationSchema,
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
    shareMessage: {
      type: String,
      required: false,
    },
    isUpComing: {
      type: Boolean,
      required: false,
    },
    declarativeValidation: {
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

EstablishmentSchema.index({ location: '2dsphere' });

const Establishment = mongoose.model('establishment', EstablishmentSchema);

module.exports = { Establishment, LocationSchema, FASHON, BOOK, ECIGARETTE, SPORT, HIGHTECH, FOOD, OFFICE };
