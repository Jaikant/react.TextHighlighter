var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/TextHighlighter.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'TextHighlighter.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              '@babel/preset-react',
            ]
          }
        }
      }
    ]
  },
  externals : ['react', 'prop-types']
};
