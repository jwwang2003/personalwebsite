const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = (options, argv) => {
  const isProd = argv.mode === 'production' // development or production

  return {
    mode: argv.mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                [
                  '@babel/plugin-transform-react-jsx',
                  {
                    pragma: 'h',
                    pragmaFrag: 'Fragment'
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|xml)$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      isProd &&
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        }),
      // bundle analyzer http://127.0.0.1:8888/
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: isProd
      })
    ].filter(Boolean),
    // live server config (routing & hmr)
    devServer: {
      contentBase: path.resolve(__dirname, 'assets'),
      hot: true,
      historyApiFallback: true
    }
  }
}
