const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    plugins: [
        // new webpack.ProvidePlugin({
        //     oc: 'octobercms',
        // }),
    ],
    externals: 'octobercms',
};
