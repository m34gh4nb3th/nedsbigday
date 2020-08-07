const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#86b59f', '@link-color': '#167335', '@border-color-base': '#167335' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};