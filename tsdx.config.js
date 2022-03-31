const postcss = require('rollup-plugin-postcss');
const image = require('@rollup/plugin-image')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      image({
        include: ['**/*.png', '**/*.svg']
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    );
    return config;
  },
};