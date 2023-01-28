module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@services': './src/services',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@types': './src/types',
        },
      },
    ],
  ],
};
