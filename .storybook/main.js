const path = require('path')
module.exports = {

  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-postcss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-css-modules-preset',
    // '@storybook/preset-create-react-app'
    // '@storybook/preset-scss'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssLoaderOptions: {
              implementation: require('postcss'),
            },
            ident: 'postcss',
            plugins: [
              require('postcss-import'),
              require('tailwindcss/nesting'),
              require('tailwindcss'),
              require('autoprefixer'),
            ]
          }
        },

      ],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },

}