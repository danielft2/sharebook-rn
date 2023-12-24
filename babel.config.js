module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@screens': 'src/screens',
            '@components': 'src/components',
            '@contexts': 'src/context',
            '@hooks': 'src/hooks',
            '@lib': 'src/lib',
            '@storage': 'src/storage',
            '@store': 'src/store',
            '@utils': 'src/utils',
            '@constants': 'src/constants',
            '@assets': 'assets'
          }
        }
      ]
    ]
  };
};
