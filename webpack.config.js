const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event; // get the npm lifecycle event
const PATHS = {
  lib_dir: __dirname + '/libs',
  node_dir: __dirname + '/node_modules',
  bower_dir: __dirname + '/bower_components',
  src_dir: __dirname + '/src',
  img_dir: __dirname + '/src/assets/img'
};

const htmlGeneratorOptions = {
  title: "ReactAPPBasic",
  template: "./src/views/index.ejs", // custom template
  inject: 'body' // inject all scripts into body
}

// set BABEL_ENV enviroment variable as npm lifecycle event
process.env.BABEL_ENV = TARGET;

var config = {
  resolve: {
      //alias = so that you can require them using the alias anywhere in the application code
      alias: {
        react: PATHS.node_dir + '/react',
        reactDom: PATHS.node_dir + '/react-dom',
        jquery: PATHS.bower_dir + '/jquery/dist/jquery.js',
        jsBootstrap: PATHS.bower_dir + '/bootstrap/dist/js/bootstrap.min.js',
        cssBootstrap: PATHS.bower_dir + '/bootstrap/dist/css/bootstrap.min.css',
        cssFontawesome: PATHS.bower_dir + '/font-awesome/css/font-awesome.min.css',
        cssAnimateCss: PATHS.bower_dir + '/animate.css/animate.min.css'
      },
      extensions: ['', '.js', '.jsx']
  },
  // reason of seperating multiple entry point is because u could chunks your code.
  // seperate out the chunks for your application code and lib code in the output later
  entry: {
    app: ['./src'],
    vendors: ['react','reactDom','jquery','jsBootstrap']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "js/[name].bundle.js" // this will produce 2 files, app.bundle.js and vendors.bundle.js
  },
  plugins: [
    // inject globals
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      'window.jQuery': "jquery",
      '$': "jquery",
      'window.$': 'jquery',
    }),
    // have Webpack determine what code/modules you use the most, and put it in a separate bundle to be used anywhere in your application.
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js', Infinity)
  ],
  module: {
    // including noParse, you can tell Webpack not to parse certain modules.
    // noParse: [
    //   new RegExp(lib_dir + '/react.js'),
    //   new RegExp(lib_dir +'/jquery-1.11.2.min.js')
    // ],
    loaders: [
      { test: /\.jsx$/, loader: 'react-hot', include: PATHS.src_dir },
      { test: /\.jsx$/, loader: 'babel', include: PATHS.src_dir },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=1000&name=images/img_[hash].[ext]', include: PATHS.img_dir},
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'], include: PATHS.src_dir },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/font_[hash].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/font_[hash].[ext]' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?&name=fonts/font_[hash].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/font_[hash].[ext]' }
    ]
  }
}//end of config


if(TARGET === 'dev' || !TARGET){
  module.exports = merge(config, {
    devtool: 'eval-source-map',
    devServer: {
      // enable history API fallback so HTML5 history API based
      // routing works. this is a good default that will come in handy for
      // more complicate setups
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      // display only errors to reduce the amount of output
      stats: 'errors-only',
      host: process.env.HOST,
      port: 1344
    },
    plugins: [
      new HtmlWebpackPlugin(htmlGeneratorOptions),
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
if(TARGET === 'build' || TARGET === 'auto-build'){
  module.exports = merge(config, {
    plugins: [
      new HtmlWebpackPlugin(htmlGeneratorOptions)
    ]
  });
}
