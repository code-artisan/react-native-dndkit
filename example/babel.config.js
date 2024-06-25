const path = require('path')

module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: [".."],
          alias: {
            "react-native-dndkit": path.resolve(__dirname, ".."),
          },
          extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        },
      ],
    ]
  };
};
