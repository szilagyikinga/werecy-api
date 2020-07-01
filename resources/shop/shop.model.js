const mongoose = require('mongoose');

const CollectSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['wetsuit', 'ecigarette', 'hightech', 'textile', 'toner'],
  },
  item: {
    type: String,
    required: false,
    enum: ['camera', 'battery', 'leather', 'mod', 'smartphone', 'tablet', 'bulk', 'neoprene', 'jean'],
  },
  successLabel: {
    type: String,
    required: true,
  },
  reward: {
    type: String,
    required: true,
  },
  collect: {
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

const ShopSchema = new mongoose.Schema(
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
    collects: {
      type: [CollectSchema],
      default: undefined,
    },
  },
  { timestamps: true }
);
const Shop = mongoose.model('shop', ShopSchema);

module.exports = { Shop };
