const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    mode: 'development',
    devServer: {
        port: 8000,
        static: {
            directory: path.resolve(__dirname, './dist'),   
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(jpeg|png|jpg|webp)$/,
                type: 'asset/resource',
            },
            {
                test: /\.txt$/,
                type: 'asset/source',
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Some custom Hello Word',
            filename: 'index.html',
            meta: {
                description: 'some description'
            }
        }),
    ]
}