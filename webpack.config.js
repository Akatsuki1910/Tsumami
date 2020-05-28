module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    library: "Tsumami",
    libraryExport: "default",
    libraryTarget: "umd",
    filename:"tsumami.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map'
};