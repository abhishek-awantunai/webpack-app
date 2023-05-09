const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        // clean: true,
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // },
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000
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
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',

        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'dist/**/*')
            ]
        }),
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