/* eslint-disable @typescript-eslint/no-var-requires */
const [server, client] = require('nullstack/webpack.config');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const plugins = [new TsconfigPathsPlugin({})];

function custom_client(...args) {
  const config = client(...args);

  config.resolve.plugins = [...(config.resolve?.plugins || []), ...plugins];

  const rule = config.module.rules.find((rule) => rule.test && rule.test.test('.css'));
  rule.use.push({
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        }
      },
    },
  });

  return config;
}

function custom_server(...args) {
  const config = server(...args);

  config.resolve.plugins = [...(config.resolve?.plugins || []), ...plugins];

  return config;
}

module.exports = [custom_server, custom_client];
