const model = require('./collecting.model');
const collectingPointModel = require('../collectingPoint/collectingPoint.model');

const getMany = async (req, res) => {
  const { state } = req.query;
  const user = req.user._id;
  try {
    const query = state ? { state, user } : { user };
    const collectings = await model.Collecting.find(query).populate('collectingPoint').lean().exec();

    res.status(200).json({
      data: collectings.map(({ collectingPoint: { address, logo, name }, ...rest }) => ({
        ...rest,
        collectingPoint: { address, logo, name },
      })),
    });
  } catch (e) {
    console.log(e);
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
    const { article, label, reward, reawards } = collectingPoint.collectings.find(
      ({ _id }) => _id.toString() === collectingId
    );
    const newCollecting = await model.Collecting.create({
      collectingPoint: collectingPointId,
      user,
      article,
      label,
      reward,
      reawards,
    });

    res.status(201).json({
      data: {
        ...newCollecting.toJSON(),
        collectingPoint: { logo: collectingPoint.logo, name: collectingPoint.name, address: collectingPoint.address },
      },
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { createOne, getMany };
