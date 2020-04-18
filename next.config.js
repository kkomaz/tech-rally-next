/* eslint-disable no-param-reassign */
const path = require('path');
const withImages = require('next-images')
const dotenv = require('dotenv')

dotenv.config()

module.exports = withImages({
  env: {
    API_URL: process.env.API_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    API_AUDIENCE: process.env.API_AUDIENCE,
    API_BASE_URL: process.env.API_BASE_URL,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME
  },
  webpack: (config) => {
    config.resolve.alias.components = path.join(__dirname, 'src/components');
    config.resolve.alias.stylesheets = path.join(__dirname, 'src/stylesheets');
    config.resolve.alias.utils = path.join(__dirname, 'src/utils');
    config.resolve.alias.assets = path.join(__dirname, 'src/assets');
    config.resolve.alias.lib = path.join(__dirname, 'lib');
    return config;
  },
});
