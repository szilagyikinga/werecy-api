const geolib = require('geolib');

const model = require('./banner.model');
const list = require('./banner.data');
const geolocService = require('../../services/geoloc');
const dateService = require('../../services/date');

const getMany = async (req, res) => {
  const { latitude, longitude, article } = req.query;
  try {
    const banners = await model.Banner.find({}).populate('collectingPoint').lean().exec();
    const formattedBanners = banners.reduce((result, { collectingPoint, startDate, endDate, ...rest }) => {
      // @todo add filter to mongoose instead
      const isOngoing = dateService.isOngoing(startDate, endDate);
      if (isOngoing) {
        const { coordonates, ...collectingPointData } = collectingPoint;
        const distance =
          latitude && longitude ? geolocService.getDistance(coordonates, latitude, longitude) : undefined;
        result.push({ startDate, endDate, collectingPoint: { ...collectingPointData, distance }, ...rest });
      }
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
