const geolib = require('geolib');

const model = require('./banner.model');
const list = require('./banner.data');
const geolocService = require('../../services/geoloc');
const dateService = require('../../services/date');

const getMany = async (req, res) => {
  const { latitude, longitude, article } = req.query;
  try {
    const query = { startDate: { $lte: dateService.endOfDay() }, endDate: { $gte: dateService.startOfDay() } };
    const banners = await model.Banner.find(query).populate('collectingPoint').lean().exec();
    const formattedBanners = banners.reduce((result, { collectingPoint, ...rest }) => {
      const { coordonates, ...collectingPointData } = collectingPoint;
      const distance = latitude && longitude ? geolocService.getDistance(coordonates, latitude, longitude) : undefined;
      result.push({ collectingPoint: { ...collectingPointData, distance }, ...rest });
      return result;
    }, []);
    res.status(200).json({
      data: formattedBanners,
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { getMany };
