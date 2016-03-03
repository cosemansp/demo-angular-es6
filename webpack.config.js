var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './app/index',
    output: {
        path: './app/bundle',
        filename: 'main.js',
        publicPath: 'bundle'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                // html loader
                test: /\.html/, loaders: ['html-loader'], exclude: /node_modules/
            },
            {
                // ES6 loader
                test: /\.js/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new OpenBrowserPlugin({ url: 'http://localhost:8080/webpack-dev-server/' })
    ],
    devServer: {
        // root folder to serve the app
        contentBase: './app',

        // Limit logging
        stats: {
            version: false,
            colors: true,
            chunks: false,
            children: true,
        },
    }
};
