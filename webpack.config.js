const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");



module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devServer: { 
    historyApiFallback: true,
    clientLogLevel: 'none',
  },
  stats: {
    logging: 'minimal',
  },
  cache: {
    type: 'filesystem',

  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  performance: { hints: false },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: true,
        parallel: true,
        terserOptions: {
          ecma: undefined,
         
          parse: {},
          compress:true,
          mangle: true, // Note mangle.properties is false by default.
          module: false,
          sourceMap: false,
          // Deprecated
          output: null,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false, 
        },
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "image-webpack-loader",
            options: {
            presets: ['@babel/preset-react'],
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(webp|png|jpe?g|gif|mp4)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ReactRefreshWebpackPlugin(),
    new CompressionPlugin({
        algorithm: "gzip",
    }),
  ],
};
