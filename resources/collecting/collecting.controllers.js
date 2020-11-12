const model = require('./collecting.model');
const collectingPointModel = require('../collectingPoint/collectingPoint.model');
const appConfig = require('../../config/appConfig');

const getMany = async (req, res) => {
  const { state } = req.query;
  const user = req.user._id;
  try {
    const query = state ? { state, user } : { user };
    const collectings = await model.Collecting.find(query).populate('collectingPoint').lean().exec();

    res.status(200).json({
      data: collectings.map(({ collectingPoint: { address, logo, name, declarativeValidation }, ...rest }) => ({
        ...rest,
        collectingPoint: { address, logo, name, declarativeValidation },
      })),
    });
  } catch (e) {
    res.status(400).end();
  }
};

const createOne = async (req, res) => {
  const { collectingPointId, collectingId } = req.body;
  const user = req.user._id;
  try {
    const pendingCollectingCount = await model.Collecting.count({ user, state: 'pending' }).exec();
    if (pendingCollectingCount >= 5) {
      return res.status(403).send({ message: 'Cannot create more collectings', error: 'TOO_MANY_PENDING' });
    }
    const collectingPoint = await collectingPointModel.CollectingPoint.findById(collectingPointId).lean().exec();
    const { article, label, reward, rewards } = collectingPoint.collectings.find(
      ({ _id }) => _id.toString() === collectingId
    );
    const newCollecting = await model.Collecting.create({
      collectingPoint: collectingPointId,
      user,
      article,
      label,
      reward,
      rewards,
    });

    res.status(201).json({
      data: {
        ...newCollecting.toJSON(),
        collectingPoint: {
          logo: collectingPoint.logo,
          name: collectingPoint.name,
          address: collectingPoint.address,
          declarativeValidation: collectingPoint.declarativeValidation,
        },
      },
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const validateOne = async (req, res) => {
  try {
    const collecting = await model.Collecting.findById(req.params.id).populate('collectingPoint');
    if (collecting.state === 'validated') {
      return res.status(400).send({ message: 'The collecting is already validated', error: 'ALREADY_VALIDATED' });
    }
    if (!collecting.collectingPoint.declarativeValidation && req.body.code !== appConfig.validationCode) {
      return res.status(403).send({ message: 'The validation code is not valid', error: 'INVALID_CODE' });
    }
    // @todo: use contants
    collecting.state = 'validated';
    collecting.validatedAt = new Date();
    collecting.save();
    res.status(200).json({ data: collecting });
  } catch (error) {
    res.status(400).end();
  }
};

module.exports = { createOne, getMany, validateOne };
