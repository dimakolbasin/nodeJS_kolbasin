const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const EsLintWebpackPlugin = require('eslint-webpack-plugin')


module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
        path: path.resolve(__dirname, 'src/public'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new EsLintWebpackPlugin({
            fix: true
        })
    ]
}