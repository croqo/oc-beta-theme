const
    path = require('path'),
    home = require('os').homedir(),
    webpack = require('webpack'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
    TerserWebpackPlugin = require('terser-webpack-plugin'),
    FileManagerPlugin = require('filemanager-webpack-plugin')
;
module.exports = {
    // mode: 'development',
    mode: 'production',
    resolve: {
        modules: [
            path.resolve(home, 'node_modules')
        ],
    },
    context: path.resolve(__dirname, '_source'),
    entry: ()=>'./',
    output: {
        path: path.resolve(__dirname, 'assets'),
        clean: true
    },
    externals: {
        jquery: ['$', 'jQuery']
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(),
        new FileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        { source: './export', destination: '../assets' }
                    ]
                }
            }
        })
    ],
    optimization: {
        minimizer: [
          `...`,
          new TerserWebpackPlugin(),
          new CssMinimizerPlugin()
        ],
    },
    stats: {
        children: true,
        builtAt: true
    }
}