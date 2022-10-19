const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (webpackEnv, webpackArgv) => ({
  mode: webpackArgv.mode,
  output: {
    path: path.join(__dirname, "/build"),
    filename: "devblog.js",
  },
  ...(webpackArgv.mode === "development"
    ? {
        devtool: "source-map",
      }
    : {}),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
    modules: ["src", "node_modules"],
  },
  devServer: {
    port: 3000,
    liveReload: true,
    host: "localhost",
    open: true,
    client: {
      overlay: true,
    },
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env", "@babel/preset-react"] },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [new Dotenv({ path: `.env.${webpackArgv.nodeEnv}` }), new HtmlWebpackPlugin({ template: "./public/index.html" })],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
});
