const nextTranslate = require('next-translate');

module.exports = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
  ...nextTranslate(),
};
