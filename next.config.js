/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    HOST_KEY: (() => {
      if (isDev) return 'https://5bd5-175-144-132-169.ngrok-free.app/api/';
      if (isProd) {
        return 'https://5bd5-175-144-132-169.ngrok-free.app/api/';
      }
      if (isStaging) return '';
      return 'HOST_KEY:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
  };

  return {
    ...nextConfig,
    env,
    images: {
      domains: ['source.unsplash.com'],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp3|mp4)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds/',
            outputPath: 'static/sounds/',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });
      return config;
    },
  };
};
