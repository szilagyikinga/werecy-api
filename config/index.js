const env = process.env.NODE_ENV || 'development';

const db = {
  host: process.env.WERECY_DB_ADDRESS || 'localhost',
  port: process.env.WERECY_DB_PORT || 27017,
  database: process.env.WERECY_DB_DATABASE || 'werecy',
  username: process.env.WERECY_DB_USERNAME || '',
  password: process.env.WERECY_DB_PASSWORD || '',
};

const isDev = env === 'development';

const config = {
  secrets: {
    jwt: 'fmqlGJs#1%*KqmsldkfjGGMKFF',
    jwtExp: '100d',
  },
  env,
  isDev,
  port: 8080,
  dbUrl: `mongodb://${isDev ? '' : `${db.username}:${db.password}@`}${db.host}:${db.port}/${db.database}`,
};

module.exports = config;
