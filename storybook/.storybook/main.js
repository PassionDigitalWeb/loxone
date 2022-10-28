const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-gatsby",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: async (config) => {
    config.module.rules.find(
      (rule) => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/;

    // Tell webpack what to do with CSS modules
    config.module.rules.push({
      test: /\.module\.scss$/,
      include: path.resolve(__dirname, "../../website/src"),
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              namedExport: true,
            },
          },
        },
        {
          loader: "sass-loader",
        },
      ],
    });

    return config;
  },
};
