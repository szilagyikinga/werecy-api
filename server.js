const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const db = require('./utils/db');
const collectingPointRouter = require('./resources/collectingPoint/collectingPoint.router');
const bannerRouter = require('./resources/banner/banner.router');
const auth = require('./utils/auth');

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/api/signIn', auth.signIn);

app.use('/api/collectingPoint', auth.protect, collectingPointRouter);
app.use('/api/banner', auth.protect, bannerRouter);

const start = async () => {
  try {
    await db.connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  app,
  start,
};
