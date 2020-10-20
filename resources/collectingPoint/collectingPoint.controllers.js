const geolib = require('geolib');

const model = require('./collectingPoint.model');
const list = require('./collectingPoint.data');
const appConfig = require('../../config/appConfig');

const getMany = async (req, res) => {
  const {
    latitude = appConfig.defaultGeoCordinates.latitude,
    longitude = appConfig.defaultGeoCordinates.longitude,
    article,
  } = req.query;
  try {
    const query = !article ? {} : { 'collectings.article': article };
    const collectingPoints = await model.CollectingPoint.find(query).lean().exec();
    const formattedCollectingPoints = collectingPoints.reduce((result, { coordonates, collectings, ...rest }) => {
      const distance = geolib.getDistance(coordonates, {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      });
      const filteredCollectings = !article
        ? collectings
        : collectings.filter((collecting) => collecting.article === article);
      if (filteredCollectings.length <= 1) {
        result.push({ ...rest, distance, collectings: filteredCollectings });
      } else {
        filteredCollectings.forEach((filteredCollecting) => {
          result.push({ ...rest, distance, collectings: [filteredCollecting] });
        });
      }
      return result;
    }, []);
    res.status(200).json({
      data: formattedCollectingPoints.sort((a, b) => (a.distance < b.distance ? -1 : 1)),
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const addMany = async (req, res) => {
  try {
    await model.CollectingPoint.remove({});
    const collecingPoints = await model.CollectingPoint.create(list);
    res.status(201).json({ data: collecingPoints });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { getMany, addMany };
