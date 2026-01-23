


module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@features': './src/features',
            '@navigation': './src/navigation',
            '@components': './src/components',
            '@unistyles': './src/unistyles',
            '@services': './src/services',
            '@states': './src/states',
            '@utils': './src/utils',
          },
        },
      ],
      
      'react-native-reanimated/plugin',
    ],
  };
};
 