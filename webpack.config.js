module.exports = {
  mode: "production",
  devtool: 'inline-source-map',
  entry: "./src/index.js",
  output: {
    library: "Tsumami",
    libraryExport: "default",
    libraryTarget: "umd",
    globalObject: 'this',
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
  optimization: {
    minimize: true,
  }
};