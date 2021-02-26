const geolib = require('geolib');
const model = require('./banner.model');
const collectingPointModel = require('../collectingPoint/collectingPoint.model');
const list = require('./banner.data');
const geolocService = require('../../services/geoloc');
const dateService = require('../../services/date');

const getMany = async (req, res) => {
  const { latitude, longitude } = req.query;
  try {
    const query = { startDate: { $lte: dateService.endOfDay() }, endDate: { $gte: dateService.startOfDay() } };
    const banners = await model.Banner.find(query).populate('establishment').lean().exec();
    const response = [];
    await Promise.all(
      banners.map(async (banner) => {
        const collectingPoints = await collectingPointModel.CollectingPoint.find({
          establishment: banner.establishment._id,
        })
          .populate('establishment')
          .lean()
          .exec();
        if (collectingPoints.length > 0) {
          response.push({
            ...banner,
            collectingPoints: collectingPoints.map((cp) => ({
              ...cp,
              distance:
                latitude && longitude
                  ? geolocService.getDistance(
                      { latitude: cp.location.coordinates[1], longitude: cp.location.coordinates[0] },
                      latitude,
                      longitude
                    )
                  : undefined,
            })),
          });
        }
      })
    );
    res.status(200).json({
      data: response,
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { getMany };
