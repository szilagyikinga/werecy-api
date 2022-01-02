const model = require('./collectingPoint.model');
const bannerModel = require('../banner/banner.model');
const collectingModel = require('../collecting/collecting.model');
const establishmentModel = require('../establishment/establishment.model');
const list = require('./collectingPoint.data');
const bannerList = require('../banner/banner.data');
const establismentList = require('../establishment/establishment.data');
const appConfig = require('../../config/appConfig');
const dateService = require('../../services/date');

const getMany = (req, res) => {
  const {
    latitude = appConfig.defaultGeoCordinates.latitude,
    longitude = appConfig.defaultGeoCordinates.longitude,
    article,
    types,
    page,
    limit: limitParam,
  } = req.query;

  const limit = parseInt(limitParam);
  const skip = limit * parseInt(page);

  const query = !article ? {} : { article };
  if (types && types.length > 0) {
    query.types = { $in: types };
  }
  query.$or = [
    { startDate: { $exists: false } },
    {
      endDate: { $gte: dateService.startOfDay() },
    },
  ];

  model.CollectingPoint.aggregate()
    .near({
      near: [parseFloat(longitude), parseFloat(latitude)],
      // distance should be only displayed if it is based on the user's position (not default data)
      distanceField: req.query.latitude && req.query.longitude ? 'distance' : '_distance',
      distanceMultiplier: 6378 * 1000,
      spherical: true,
      query,
    })
    .skip(skip)
    .limit(limit)
    .exec(function (err, docs) {
      if (err) return res.status(400).end();

      model.CollectingPoint.populate(docs, { path: 'establishment' }, function (err, collectingPoints) {
        if (err) {
          return res.json(err);
        } else {
          model.CollectingPoint.countDocuments(query).exec(function (err, count) {
            if (err) {
              return res.json(err);
            } else {
              return res.status(200).json({
                data: collectingPoints,
                hasMore: count > skip + limit,
              });
            }
          });
        }
      });
    });
};

const addMany = async (req, res) => {
  try {
    await model.CollectingPoint.deleteMany({});
    await bannerModel.Banner.deleteMany({});
    await collectingModel.Collecting.deleteMany({});
    await establishmentModel.Establishment.deleteMany({});

    // Establishments
    const formattedEstablismentList = establismentList.map(({ coordinates, ...rest }) => ({
      ...rest,
      location: {
        type: 'Point',
        coordinates: [coordinates.longitude, coordinates.latitude],
      },
    }));
    const estabmlisments = await establishmentModel.Establishment.create(formattedEstablismentList);

    // Collecting points
    const formattedCollectingPointList = list.map(({ establishment, startDate, endDate, ...rest }) => {
      const currentEstablishment = estabmlisments.find((e) => e.code === establishment);
      if (!currentEstablishment) throw new Error();
      return {
        establishment: currentEstablishment._id,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        types: currentEstablishment.types,
        location: {
          type: 'Point',
          coordinates: [currentEstablishment.location.coordinates[0], currentEstablishment.location.coordinates[1]],
        },
        ...rest,
      };
    });
    const collectingPoints = await model.CollectingPoint.create(formattedCollectingPointList);

    // Banner
    bannerList.forEach(({ establishment: establishmentCode, startDate, endDate, ...rest }) => {
      const establishment = estabmlisments.find((e) => e.code === establishmentCode);
      bannerModel.Banner.create({
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        establishment: establishment._id,
        ...rest,
      });
    });

    res.status(201).json({ data: estabmlisments });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { getMany, addMany };
