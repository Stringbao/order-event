let path = require('path');
let webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
let domain = argv.domain ? "/"+argv.domain : ''
module.exports = {
    mode: 'production',
    entry: {
        tool: './core.js'
    },//入口
    output: {
        path: path.resolve(__dirname, './dist'+domain),//输出结果
        filename: "[name].min.js",
        library: "order_core_tool",
        libraryTarget: "umd",
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'static/images/'
                }
            },
            {
                test: /\.css$/,
                use:[
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    // },
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'url-loader', options: { name: 'fonts/[name].[hash:8].[ext]' }//项目设置打包到dist下的fonts文件夹下
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.json', ".css"],
        alias: {

        }
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new SimpleProgressWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "css/[name].[chunkhash:8].css",
        //     chunkFilename: "css/[id].css"
        // }),
    ],
    devtool: "source-map",
}
