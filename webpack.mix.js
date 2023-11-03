const mix = require('laravel-mix');
const webpackConfig = require('./webpack.config');

mix.webpackConfig(webpackConfig)
    .options({
        processCssUrls: true,
        manifest: false,
        terser: {
            terserOptions: {
                compress: true,
                output: {
                    comments: false
                }
            },
        },
    })
    .setPublicPath('');

mix
    .sass('assets/sass/index.sass', 'assets/css')
;
