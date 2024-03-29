const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const config = require('./config');
const { admin, superAdmin, authenticate } = require('./utils/admin');
const db = require('./utils/db');
const collectingPointAppRouter = require('./resources/collectingPoint/collectingPoint.app.router');
const bannerAppRouter = require('./resources/banner/banner.app.router');
const collectingAppRouter = require('./resources/collecting/collecting.app.router');

const establishmentApiRouter = require('./resources/establishment/establishment.api.router');
const collectingPointApiRouter = require('./resources/collectingPoint/collectingPoint.api.router');
const userApiRouter = require('./resources/user/user.api.router');
const collectingApiRouter = require('./resources/collecting/collecting.api.router');
const adminApiRouter = require('./resources/admin/admin.api.router');
const auth = require('./utils/auth');

const app = express();

app.disable('x-powered-by');
app.use(cors({ exposedHeaders: ['Content-Length', 'X-Total-Count'] }));
app.use(bodyParser.json({ limit: '15mb' })); // Upload size
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './admin/build')));

app.use(morgan('dev'));

// Routes for mobile app
app.post('/api/signIn', auth.signIn);
app.use('/api/collectingPoint', collectingPointAppRouter);
app.use('/api/collecting', auth.protect, collectingAppRouter);
app.use('/api/banner', bannerAppRouter);

// REST routes for admin
app.use('/api/establishments', admin, establishmentApiRouter);
app.use('/api/collectingPoints', admin, collectingPointApiRouter);
app.use('/api/users', admin, userApiRouter);
app.use('/api/collectings', admin, collectingApiRouter);
app.use('/api/authenticate', authenticate);
app.use('/api/admins', admin, superAdmin, adminApiRouter);

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
