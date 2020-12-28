const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const EsLintWebpackPlugin = require('eslint-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.ts'),
    devtool: 'inline-source-map',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'src/public'),
        filename: 'main.js'
    },
    resolve: {
        extensions: [".ts", ".js", ".less"]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|svg)/,
                use: 'file-loader'
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "img", to: "img" }
            ],
        }),

        new EsLintWebpackPlugin({
            fix: true
        })
    ]
}