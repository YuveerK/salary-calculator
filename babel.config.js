module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Required for react-native-worklets
      "react-native-worklets/plugin",

      // Reanimated plugin MUST be last
      "react-native-reanimated/plugin",
    ],
  };
};
