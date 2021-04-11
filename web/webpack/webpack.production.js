const path = require("path");
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const argv = require('yargs-parser')(process.argv.slice(2));

console.log(argv.mode);

module.exports = merge(common,{
    mode:"production",
    // devtool:"source-map",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].min.js",
        library: "leThankYou",
        libraryTarget: "umd",
        libraryExport: 'default',
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "pcThankYou.html",
            template: "./src/origin/ejs/pc/pcThankYou.ejs",
            minify: false,
            mode: argv.mode,
            inject: true,
            chunks:["thankyou"]
        }),
        new HtmlWebpackPlugin({
            filename: "mThankYou.html",
            template: "./src/origin/ejs/mobile/mThankYou.ejs",
            minify: false,
            mode: argv.mode,
            inject: true,
            chunks:["mthankyou"]
        }),
        new HtmlWebpackPlugin({
            filename: "tThankYou.html",
            template: "./src/origin/ejs/tablet/tThankYou.ejs",
            minify: false,
            mode: argv.mode,
            inject: true,
            chunks:["tthankyou"]
        }),
        new CleanWebpackPlugin(),
        new SimpleProgressWebpackPlugin()
    ]
})