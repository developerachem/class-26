const path = require("path");
const htmlwebpack = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "Bundle"),
    filename: "bundle.js",
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "bundle"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: "source-map",

  plugins: [
    new htmlwebpack({
      title: " Mini react ",
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
