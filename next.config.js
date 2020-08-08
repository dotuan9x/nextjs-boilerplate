const path = require('path');
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('./next.sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');

const nextConfig = {
    env: {
        ENV: process.env.NODE_ENV || 'development'
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static'
    },
    webpack(config, options) {
        // Further custom configuration here
        config.resolve.alias['Config'] = path.join(__dirname, 'config');
        config.resolve.alias['Modules'] = path.join(__dirname, 'modules');
        config.resolve.alias['Components'] = path.join(__dirname, 'components');
        config.resolve.alias['Libs'] = path.join(__dirname, 'libs');
        config.resolve.alias['Services'] = path.join(__dirname, 'services');
        config.resolve.alias['Static'] = path.join(__dirname, 'public');
        config.resolve.alias['Public'] = path.join(__dirname, 'public');

        return config;
    }
};

module.exports = withPlugins(
    [
        [withCSS],
        [withSass],
        [withImages],
        [withFonts]
    ],
    nextConfig
);
