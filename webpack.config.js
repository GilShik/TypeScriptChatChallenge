'use strict';
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './dist/client/app.js',
    output: {
    filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist', 'client')
    },
    resolve: {
        //extensions: [ '.ts', '.tsx', '.js' ],
        extensions: [ '.js' ]
    },
    node: {
        fs: 'empty'
    },
    externals: {
        uws: "uws"
    },
    performance: {
        hints: false
    }
};