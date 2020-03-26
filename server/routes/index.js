const product = require('./product.route');

module.exports = (server) => {
  server.use('/products', product);
};
