module.exports = {
    sourceMaps: true,
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        ['module:react-native-dotenv'],
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.jsx',
                    '.json',
                    '.tsx',
                    '.ts',
                    '.native.js',
                ],
                alias: {
                    _dal: './src/common/data/',
                },
            },
        ],
    ],
};
