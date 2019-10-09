const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  hash: true,
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
})


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.json?$/, loader: "json-loader" },
      // STYLES
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },

      // CSS / SASS
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(pdf|png|jpg|gif|swf|jpeg)$/,
        loader: "file-loader"
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2|woff(2)?)(\S+)?$/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      "X-Frame-Options":"sameorigin",
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      "Cache-Control": "max-age=10,max-stale=10,min-fresh=10,no-cache,no-store,no-transform,only-if-cached ",
      "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
      "X-XSS-Protection": "1; mode=block",
      "x-content-type-options": "nosniff"

    },
    port: 6566
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin(['REACT_APP_FEEDBACK_API']),
  ]


 //  minimizer: [
 //     new TerserPlugin({
 //       extractComments: true,
 //       cache: true,
 //       parallel: true,
 //       sourceMap: true, // Must be set to true if using source-maps in production
 //       terserOptions: {
 //         // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
 //          extractComments: 'all',
 //          compress: {
 //              drop_console: true,
 //          },
 // }
 //     }),
 //   ]


}
