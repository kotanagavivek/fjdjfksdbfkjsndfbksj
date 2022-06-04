const path = require("path");

module.exports = () => {
  return {
    experiments: {
      topLevelAwait: true,
    },
    entry: {
      app: "./src/index.tsx",
    },
    devServer: {
      host: "0.0.0.0",
      compress: true,
      port: 8090,
      historyApiFallback: true,
    },
    output: {
      path: path.join(__dirname, "./quiz"),
      filename: "./quiz/bundle.js",
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(t|j)s(x)?$/,
          exclude: /node_modules/,
          use: {},
          include: __dirname,
        },
      ],
    },
    plugins: [],
  };
};
