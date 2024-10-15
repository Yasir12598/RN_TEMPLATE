module.exports = {
  presets: ['module:@react-native/babel-preset'],
};
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        version: '7.0.0-beta.0',
      },
    ],
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@config': './src/config',
          '@libs': './src/libs',
          '@modules': './src/modules',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@store': './src/store',
          '@translation': './src/translation',

        },
      },
    ],
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
      "safe": true,
    }],
  ],
};