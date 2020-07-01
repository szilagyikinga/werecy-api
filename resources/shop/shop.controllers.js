const geolib = require('geolib');

const model = require('./shop.model');
const shopList = require('./shop.data');

const getMany = async (req, res) => {
  // collect category and item should be added to the query
  const { latitude, longitude } = req.query;
  try {
    const shops = await model.Shop.find({}).lean().exec();
    res.status(200).json({
      data: shops.map(({ coordonates, ...rest }) => ({
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

const addShops = async (req, res) => {
  try {
    await model.Shop.remove({});
    const shops = await model.Shop.create(shopList);
    res.status(201).json({ data: shops });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { getMany, addShops };
