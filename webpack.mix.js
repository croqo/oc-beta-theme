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
    .js('src/js/index.js', 'assets/js')
    .sass('src/sass/index.sass', 'assets/css')
;
