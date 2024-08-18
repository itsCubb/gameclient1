const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // For JavaScript and JSX files
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // For handling image files
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve .js and .jsx extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template for the HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Directory for static files
    },
    compress: true, // Enable gzip compression
    port: 3000, // Port for the development server
    hot: false, // Enable Hot Module Replacement
  },
};