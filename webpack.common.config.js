const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const EsLintWebpackPlugin = require('eslint-webpack-plugin')


module.exports = {
    entry: path.resolve(__dirname, 'src/scripts&styles/index.js'),
    output: {
        path: path.resolve(__dirname, 'src/public'),
        filename: 'main.js'
    },
    module: {
        rules: [
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