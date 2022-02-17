
const
    webpack = require("webpack"),
    path = require("path"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin")
;
module.exports = {
    devtool: false,
    mode: "production",
    entry: {
        "main": [
            "./package/index.js",
            "./package/index.sass"
        ]
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, "assets", "build")
    },
    resolve: {
        extensions: [
            ".js",
            ".json",
            ".sass",
            ".scss",
            ".css",
        ],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.ProgressPlugin({
            activeModules: false,
            entries: true,
            profile: true,
            dependencies: true,
            percentBy: "entries"
        })
    ],
    optimization: {
        minimize: true
    }
}
