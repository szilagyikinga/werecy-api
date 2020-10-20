const geolib = require('geolib');

const model = require('./collectingPoint.model');
const list = require('./collectingPoint.data');

const getMany = async (req, res) => {
  // collect category and item should be added to the query
  const { latitude, longitude } = req.query;
  try {
    const collectingPoints = await model.CollectingPoint.find({}).lean().exec();
    res.status(200).json({
      data: collectingPoints.map(({ coordonates, ...rest }) => ({
        ...rest,
        distance:
          latitude && longitude
            ? geolib.getDistance(coordonates, { latitude: parseFloat(latitude), longitude: parseFloat(longitude) })
            : undefined,
      })),
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
