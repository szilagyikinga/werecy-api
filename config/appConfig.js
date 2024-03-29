if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const appConfig = {
  defaultGeoCordinates: {
    latitude: 43.288675,
    longitude: 5.359795,
  },
  googleApi: {
    id: '560438869501-7topd2if5pph1mbial5kc25m7bcasfhe.apps.googleusercontent.com',
    clientIds: [
      '560438869501-6utq5m0d59f8k387gkcp6255r5pko5tl.apps.googleusercontent.com',
      '560438869501-plogn5dcd2qso49g5h06v7m56utgmjql.apps.googleusercontent.com',
      '560438869501-po0os2u6e6nkqhh3t0usfte7t23ck7m7.apps.googleusercontent.com',
      '560438869501-bsvumt1cndc8r38vofm5dcldq15hqmhh.apps.googleusercontent.com',
    ],
  },
  validationCode: 'good_job_tu_viens_de_ressusciter_ton_objet',
  cloudinary: {
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: 'werecy',
    secure: true,
  },
};

module.exports = appConfig;
