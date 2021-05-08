const
    path = require('path'),
    // home = require('os').homedir(),
    mix = require('laravel-mix'),
    // webpack = require('webpack'),
    // MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    // CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
    // TerserWebpackPlugin = require('terser-webpack-plugin'),
    // FileManagerPlugin = require('filemanager-webpack-plugin'),
    svgToMiniDataURI = require('mini-svg-data-uri')
;
mix.webpackConfig
(
    {
        // mode: 'development',
        // mode: 'production',
        resolve: {
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
        },
        // context: path.resolve(__dirname, '_source'),
        // entry: ()=>'./',
        output: {
        //     path: path.resolve(__dirname, 'assets'),
            clean: true
        },
        externals: {
            jquery: ['$', 'jQuery']
        },
        module: {
            rules: [
                // {
                //     test: /\.(sa|sc|c)ss$/,
                //     use: [
                //         MiniCssExtractPlugin.loader, 
                //         'css-loader', 'sass-loader'
                //     ]
                // },
                {
                    test: /\.svg/,
                    type: 'asset/inline',
                   generator: {
                     dataUrl: content => {
                       content = content.toString();
                       return svgToMiniDataURI(content);
                     }
                   }
                }
            ]
        },
        // plugins: [
        //     new webpack.ProgressPlugin(),
        //     new MiniCssExtractPlugin(),
        //     new FileManagerPlugin({
        //         events: {
        //             onEnd: {
        //                 copy: [
        //                     { source: './export', destination: '../assets' }
        //                 ]
        //             }
        //         }
        //     })
        // ],
        // optimization: {
        //     minimizer: [
        //       `...`,
        //       new TerserWebpackPlugin(),
        //       new CssMinimizerPlugin()
        //     ],
        // },
        stats: {
            children: true,
            builtAt: true
        }
    }
);

mix.setPublicPath('assets');
mix.js('_source/index.js', 'assets');
mix.sass('_source/style.sass', 'assets');
mix.copy('_source/export/images/**', 'assets/images');
mix.version();