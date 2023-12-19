const path = require('path');

module.exports = {
  resolve: {
    alias: {
      store: path.resolve(__dirname, './src/store'),
      components: path.resolve(__dirname, './src/components'),
    },
  },
};
