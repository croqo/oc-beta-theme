const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    // webpack recommendations
    // https://docs.octobercms.com/3.x/cms/ajax/turbo-router.html#working-with-hot-reloading
    snippetOptions: {
        rule: {
            match: /<\/head>/i,
            fn: function (snippet, match) {
                return '<meta name="turbo-visit-control" content="disable" />';
            }
       }
    }
};
