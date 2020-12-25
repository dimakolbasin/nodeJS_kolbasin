const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
/*const EsLintWebpackPlugin = require('eslint-webpack-plugin')*/


module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.ts'),
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'src/public'),
        filename: 'main.js'
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
            }/*,
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }*/

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        /*new EsLintWebpackPlugin({
            fix: true
        })*/
    ]
}