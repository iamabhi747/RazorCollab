const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "code2markdown.bundle.js",
    path: path.resolve(__dirname, "build"),
    library: {
      name: "code2markdown",
      type: "var",
    },
  },
  mode: "development",
};
