const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.config')

module.exports = merge(commonConfig, {
    mode: "development",
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    }
})
