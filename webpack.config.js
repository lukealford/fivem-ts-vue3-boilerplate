const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const buildPath = path.resolve(__dirname, "./dist");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

const client = {
  entry: "./client/client.ts",
  output: {
    path: path.resolve(buildPath, "client"),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "es2020",
          tsconfigRaw: require("./client/tsconfig.json"),
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*.lua",
          context: path.resolve(__dirname, "client"),
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2020",
      }),
    ],
  },
};

const server = {
  entry: "./server/server.ts",
  output: {
    path: path.resolve(buildPath, "server"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "es2020",
          tsconfigRaw: require("./server/tsconfig.json"),
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*.lua",
          context: path.resolve(__dirname, "server"),
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2020",
      }),
    ],
  },
};

module.exports = [client, server];
