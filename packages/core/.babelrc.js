const sharedPresets = [
  "@babel/preset-env", 
  "@babel/preset-react",
  "@babel/preset-typescript"
];

const sharedPlugins = [
  "@babel/plugin-proposal-class-properties",
  ["@babel/transform-runtime"]
];

const ignore = [
  "**/*.test.tsx",
  "**/*.test.tsx.snap"
];

module.exports = {
  "env": {
    "esm": {
      "presets": [
        ...sharedPresets.slice(1),
        ["@babel/preset-env", {
          "modules": false
        }]
      ],
      "plugins": sharedPlugins,
      "ignore": ignore

    },
    "cjs": {
      "presets": sharedPresets,
      "plugins": sharedPlugins,
      "ignore": ignore
    }
  }
}