const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Archivo principal del programa
  entry: ["@babel/polyfill", "./src/index.js"],
  // Dónde se guarda el output del build
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    // Que archivos se usan para el proyecto
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        // Identificación de archivos JS
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Identificación de archivos HTML
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        // Identificación de archivos CSS
        test: /\.(s*)css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      {
        // Loader para imágenes
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "assets/[hash].[ext]" },
          },
        ],
      },
    ],
  },
  devServer: {
    // Permite manejar la historia de la navegación.
    historyApiFallback: true,
  },
  plugins: [
    // Plugin que genera un HTML que incluya todos los bundles generados por Webpack usando scripts js
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./src/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
};
