'use strict';

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './example/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    resolve: {
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        open: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./example/index.html"
        }),
        new VueLoaderPlugin()
    ]
};
