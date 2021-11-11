const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
  framework: {
    name: 'shopify_local',
  },
  il8n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
});

console.log('next.config.js', JSON.stringify(module.exports, null, 2));
