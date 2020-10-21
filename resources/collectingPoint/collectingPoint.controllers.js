const model = require('./collectingPoint.model');
const bannerModel = require('../banner/banner.model');
const list = require('./collectingPoint.data');
const bannerList = require('../banner/banner.data');
const appConfig = require('../../config/appConfig');
const collectingPoints = require('./collectingPoint.data');
const geolocService = require('../../services/geoloc');
const dateService = require('../../services/date');

const getMany = async (req, res) => {
  const {
    latitude = appConfig.defaultGeoCordinates.latitude,
    longitude = appConfig.defaultGeoCordinates.longitude,
    article,
  } = req.query;
  try {
    const query = !article ? {} : { 'collectings.article': article };
    // @todo create temporary collectingPoint model and move start and endDate to collecting
    query.$or = [{ endDate: null }, { endDate: { $gte: dateService.startOfDay() } }];
    const collectingPoints = await model.CollectingPoint.find(query).lean().exec();
    const formattedCollectingPoints = collectingPoints.reduce((result, { coordonates, collectings, ...rest }) => {
      const distance = geolocService.getDistance(coordonates, latitude, longitude);
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
    await model.CollectingPoint.deleteMany({});
    await bannerModel.Banner.deleteMany({});
    const formattedList = list.map(({ startDate, endDate, ...rest }) => ({
      ...rest,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
    }));
    const collectingPoints = await model.CollectingPoint.create(formattedList);
    bannerList.forEach(({ collectingPoint: collectingPointName, startDate, endDate, ...rest }) => {
      const collectingPoint = collectingPoints.find((cp) => cp.name === collectingPointName);
      bannerModel.Banner.create({
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        collectingPoint: collectingPoint._id,
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
