module.exports = {
    entry: "./test.js",
    output: {
        path: __dirname,
        filename: "output.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "use-strict-loader"
            }
        ]
    }
}