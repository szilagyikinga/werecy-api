const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema(
  {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    collectingPoint: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'collectingPoint',
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    highlightColor: {
      type: String,
      required: false,
    },
    backgroundColor: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const Banner = mongoose.model('banner', BannerSchema);

module.exports = { Banner };
