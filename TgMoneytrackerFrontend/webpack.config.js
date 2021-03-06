var webpack = require('webpack');

module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: "/dist/js",
        publicPath: "/dist/",
        filename: "app.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/src|vue-router\//,
                loader: 'babel-loader',
                query:{
                    presets: ['env'],
                    plugins: ['transform-runtime']
                            }
            },
            // {
            //     test: /\.scss$/,
            //     loaders: ['style', 'css', 'sass']
            // },
            // {
            //     test: /\.vue$/,
            //     loader: 'vue'
            // }
        ]
    },
    // resolve: {
    //     modulesDirectories: ['node_modules'],
    //     alias: {
    //         'vue$': 'vue/dist/vue.common.js'
    //     }
    // }
}