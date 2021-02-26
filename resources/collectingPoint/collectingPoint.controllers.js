const model = require('./collectingPoint.model');
const bannerModel = require('../banner/banner.model');
const collectingModel = require('../collecting/collecting.model');
const establishmentModel = require('../establishment/establishment.model');
const list = require('./collectingPoint.data');
const bannerList = require('../banner/banner.data');
const establismentList = require('../establishment/establishment.data');
const appConfig = require('../../config/appConfig');
const collectingPoints = require('./collectingPoint.data');
const geolocService = require('../../services/geoloc');
const dateService = require('../../services/date');

const getMany = (req, res) => {
  const {
    latitude = appConfig.defaultGeoCordinates.latitude,
    longitude = appConfig.defaultGeoCordinates.longitude,
    article,
  } = req.query;

  const query = !article ? {} : { article };
  query.$or = [
    { startDate: { $exists: false } },
    {
      endDate: { $gte: dateService.startOfDay() },
    },
  ];
  // query.location = {
  //   $near: {
  //     $geometry: { type: 'Point', coordinates: [longitude, latitude] },
  //   },
  // };
  // const collectingPoints = await model.CollectingPoint.find(query).populate('establishment').lean().exec();

  model.CollectingPoint.aggregate()
    .near({
      near: [parseFloat(longitude), parseFloat(latitude)],
      // distance should be only displayed if it is based on the user's position (not default data)
      distanceField: req.query.latitude && req.query.longitude ? 'distance' : 'hiddenDistance',
      distanceMultiplier: 6378 * 1000,
      spherical: true,
      query,
    })
    .exec(function (err, docs) {
      if (err) res.status(400).end();

      model.CollectingPoint.populate(docs, { path: 'establishment' }, function (err, collectingPoints) {
        if (err) {
          res.json(err);
        } else {
          res.status(200).json({
            data: collectingPoints,
          });
        }
      });
    });

  // res.status(200).json({
  //   data: collectingPoints.map(({ location, ...rest }) => ({
  //     distance: geolocService.getDistance(
  //       { latitude: location.coordinates[1], longitude: location.coordinates[0] },
  //       latitude,
  //       longitude
  //     ),
  //     ...rest,
  //   })),
  // });

  // res.status(200).json({
  //   data: collectingPoints,
  // });
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

    res.status(201).json({ data: collectingPoints });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { getMany, addMany };
