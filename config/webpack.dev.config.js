const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = () => {
  return merge([
    {
      mode: 'development',
    }
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), devConfig(env));
}
