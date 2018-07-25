const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  // entry: "./src/app/index.js",
  //   output: {
  //       path: path.resolve(__dirname, 'build'),
  //       publicPath: 'build',
  //       filename: 'bundle-main.js'
  //   },
  //   devServer: {
  //       historyApiFallback:{
  //           index:'build/index.html'
  //       },
  //   },
  devServer: { historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      { test: /\.(png|gif|woff|woff2|eot|ttf|svg|mp4)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
