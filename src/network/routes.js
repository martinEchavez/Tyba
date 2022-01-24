const auth = require('../components/authentication/network');
const maps = require('../components/maps/network');

const routes = (server) => {
  server.use('/api/auth', auth);
  server.use('/api/maps', maps);
};

module.exports = routes;
