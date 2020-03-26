const path = require('path');

module.exports = {
  webpack: (config, options) => {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['stylesheets'] = path.join(__dirname, 'src/stylesheets')
    return config;
  }
}