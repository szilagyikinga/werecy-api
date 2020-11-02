const model = require('./collecting.model');
const collectingPointModel = require('../collectingPoint/collectingPoint.model');

const createOne = async (req, res) => {
  const { collectingPointId, collectingId } = req.body;
  try {
    const collectingPoint = await collectingPointModel.CollectingPoint.findById(collectingPointId).lean().exec();
    const { article, label, reward, reawards } = collectingPoint.collectings.find(
      ({ _id }) => _id.toString() === collectingId
    );
    const data = await model.Collecting.create({
      collectingPoint: collectingPointId,
      user: req.user._id,
      article,
      label,
      reward,
      reawards,
    });
    res.status(201).json({ data });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { createOne };
