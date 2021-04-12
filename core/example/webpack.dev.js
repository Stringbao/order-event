const webpack = require('webpack');
const path = require("path");
const SSICompileWebpackplugin = require('ssi-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports =  {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    entry:"./example/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    devServer: {
        contentBase: "./dist",
        hot: true,
        watchContentBase: true,
        openPage: "./index.html",
        host:"t.gl.lenovouat.cn",
        proxy: {
            // '/openapi': {
            //     target: 'https://openapi.lenovouat.cn/',
            //     secure: false,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         "^/openapi": ""
            //     },
            // },
            // '/': {
            //     target: 'http://ofp-purchaseweb-sev.docker.ofp.dev',
            //     secure: false,
            //     changeOrigin: true,
            // }
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'test title',
            filename: 'index.html',
            template: './example/index.html',
            minify:false
        }),
        new SSICompileWebpackplugin({
            remoteBasePath: "https://j1-ofp.lenovouat.cn",
            minify: false
        })
    ],
    watchOptions: {
        ignored: /node_modules/
    }
}