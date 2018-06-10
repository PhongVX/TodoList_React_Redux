module.exports = {
    entry: './client/app.js',
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    module: {
        rules: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react','stage-0']
          },
          test: /\.jsx?$/,
          exclude: /node_modules/
        }
      ]
    }
  };