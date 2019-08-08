'use strict';

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './examples/large-list/index.js',
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
        }, {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.vue$/] }
        }, {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./examples/large-list/index.html"
        }),
        new VueLoaderPlugin()
    ]
};
