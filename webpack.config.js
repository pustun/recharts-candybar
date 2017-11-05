const path = require('path');

var env = !!process.env.NODE_ENV
          ? process.env.NODE_ENV.toUpperCase()
          : 'DEVELOPMENT';

var entry, output, externals;

if (env === 'DEVELOPMENT') {

  entry = './example.js';
  output = {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  };

} else if (env === 'PRODUCTION') {

  entry = './src/index.js';
  output = {
    path: path.resolve('dist'),
    filename: 'candybar.js',
    library: 'candybar',
    libraryTarget: 'umd'
  };
  externals = {
    react: {
      commonjs: 'react',
      root: 'React'
    },
    reactDom: {
      commonjs: 'react-dom',
      root: 'ReactDOM'
    },
    recharts: {
       commonjs: 'recharts',
       root: 'Recharts'
    }
  };

} else {
  throw new Error('Environment ' + env + ' is not supported');
}

var config = {
  entry: entry,
  output: output,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};

module.exports = config;
