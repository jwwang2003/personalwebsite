const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = (options, argv) => {
  
  const isProd = argv.mode === "production"; // development or production
  
  return {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "@teamsupercell/typings-for-css-modules-loader",
            {
              loader: "css-loader",
              options: { modules: true },
            },
            "sass-loader"
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
      alias: {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      },
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js",
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      isProd && new BrotliPlugin({
        asset: "[path].br[query]",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      // bundle analyzer http://127.0.0.1:8888/
      new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: isProd }),
    ].filter(Boolean),
    // live server config (routing & hmr)
    devServer: {
      hot: true,
      historyApiFallback: true,
    },
  };
};
