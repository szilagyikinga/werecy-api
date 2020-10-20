const geolib = require('geolib');

const getDistance = (coordonates, latitude, longitude) => {
  return geolib.getDistance(coordonates, {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  });
};

module.exports = { getDistance };
