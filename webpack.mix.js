const mix = require('laravel-mix');

mix
    .options({
        processCssUrls: false,
        manifest: false,
        terser: {
            terserOptions: {
                mangle: false,
                compress: true,
                output: {
                    comments: false
                }
            },
        },
    })
    .setPublicPath('assets')
    .js('source/index.js', 'js')
    .sass('source/index.sass', 'css')
    .version()
;
