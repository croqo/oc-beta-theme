const
    path = require('path'),
    mix = require('laravel-mix'),
    webpack = require('webpack'),
    // CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
    // TerserWebpackPlugin = require('terser-webpack-plugin'),
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
        output: {
            clean: true
        },
        externals: {
            jquery: ['$', 'jQuery']
        },
        module: {
            rules: [
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
        plugins: [
            new webpack.ProgressPlugin(),
        ],
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