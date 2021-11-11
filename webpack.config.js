const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
glob.sync('src/pages/**/*.html');

const HTMLReg = '([^<>/\\|:""*?]+).html';
const JSReg = '([^<>/\\|:""*?]+).js';
const html = glob.sync('src/pages/**/*.html').map(path => {
    let name = path.match(HTMLReg)[1];
    return new HtmlWebpackPlugin({
        template: path,
        filename: name + '.html',
        chunks: [name, 'vendor'],
    });
});

const entries = glob.sync('src/pages/**/*.js').reduce((prev, next) => {
    let name = next.match(JSReg)[1];
    prev[name] = './' + next;
    return prev;
}, {});

module.exports = {
    entry: entries,
    resolve: {
        extensions: ['.js'],
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                        },
                    },
                ],
            },
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            // },
        ],
    },
    plugins: html,
    devServer: {
        port: 8080,
        historyApiFallback: true,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://devweb.com:8089',
                secure: false,
                changeOrigin: true,
            },
        },
    },
};
