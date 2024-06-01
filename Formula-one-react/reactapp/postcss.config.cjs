module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
