const model = require('./collecting.model');
const collectingPointModel = require('../collectingPoint/collectingPoint.model');
const appConfig = require('../../config/appConfig');
const { Collection } = require('mongoose');

const getMany = async (req, res) => {
  const { state, page, limit: limitParam } = req.query;
  const limit = parseInt(limitParam);
  const skip = limit * parseInt(page);

  const user = req.user._id;
  try {
    const query = state ? { state, user } : { user };
    const collectings = await model.Collecting.find(query)
      .skip(skip)
      .limit(limit)
      .sort([['createdAt', -1]])
      .populate('establishment')
      .lean()
      .exec();

    const count = await model.Collecting.countDocuments(query).exec();

    res.status(200).json({
      data: collectings,
      hasMore: count > skip + limit,
    });
  } catch (e) {
    res.status(400).end();
  }
};

const createOne = async (req, res) => {
  const { collectingPointId } = req.body;
  const user = req.user._id;
  try {
    const pendingCollectingCount = await model.Collecting.count({
      user,
      state: model.STATE_PENDING,
    }).exec();
    if (pendingCollectingCount >= 5) {
      return res.status(403).send({ message: 'Cannot create more collectings', error: 'TOO_MANY_PENDING' });
    }
    const collectingPoint = await collectingPointModel.CollectingPoint.findById(collectingPointId)
      .populate('establishment')
      .lean()
      .exec();

    const { article, label, reward, rewards, establishment } = collectingPoint;
    const newCollecting = await model.Collecting.create({
      establishment,
      user,
      article,
      label,
      reward,
      rewards,
    });

    res.status(201).json({
      data: { ...newCollecting.toJSON(), establishment },
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const validateOne = async (req, res) => {
  try {
    const collecting = await model.Collecting.findById(req.params.id).populate('establishment');
    if (collecting.state === model.STATE_VALIDATED) {
      return res.status(400).send({ message: 'The collecting is already validated', error: 'ALREADY_VALIDATED' });
    }
    if (!collecting.establishment.declarativeValidation && req.body.code !== appConfig.validationCode) {
      return res.status(403).send({ message: 'The validation code is not valid', error: 'INVALID_CODE' });
    }
    collecting.state = model.STATE_VALIDATED;
    collecting.validatedAt = new Date();
    collecting.save();
    res.status(200).json({ data: collecting });
  } catch (error) {
    res.status(400).end();
  }
};

module.exports = { createOne, getMany, validateOne };
