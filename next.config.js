/* eslint-disable no-param-reassign */
const path = require('path');
const withImages = require('next-images')

module.exports = withImages({
  webpack: (config) => {
    config.resolve.alias.components = path.join(__dirname, 'src/components');
    config.resolve.alias.stylesheets = path.join(__dirname, 'src/stylesheets');
    config.resolve.alias.utils = path.join(__dirname, 'src/utils');
    config.resolve.alias.assets = path.join(__dirname, 'src/assets');
    return config;
  },
});
