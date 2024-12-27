module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // For react-native-dotenv
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    // For react-native-reanimated
    'react-native-reanimated/plugin',
  ],
};
