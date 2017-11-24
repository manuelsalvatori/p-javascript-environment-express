//import webpack from 'webpack';
import path from 'path'; //Comes with node and exposes __dirname as full path

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', // Can be node or electron as another alternative
  output: {
    path: path.resolve(__dirname, 'src'), // Does not create any file, all is kept in memory
    publicPath: '/', // Root dire of the path
    filename: 'bundle.js' // Place bundle.js in to root of our src directory (virtually because in memory)
  },
  plugins: [],
  module: {
    rules: [ // Loaders teach Webpack how to handle different file types
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}

//   plugins: [
//     new webpack.LoaderOptionsPlugin({
//         debug: true,
//         noInfo: false,
//       })
//   ],
//   module: {
//     : [
//       {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
//       {test: /\.css$/, loaders: ['style-loader','css-loader']}
//     ]
//   }
// }