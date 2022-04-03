const model = require('./collectingPoint.model');
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

  // check api version
  const defaultArticleFilter = req.headers.version === 'v2' ? {} : { article: { $in: model.v1Articles } };

  console.log({ defaultArticleFilter });

  const query = !article ? defaultArticleFilter : { article };
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

module.exports = { getMany };
