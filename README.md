# use-strict-loader
This is a loader for webpack.
You can use this loader for adding 'use strict' to the header of a file.


## Usage

```javascript
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
```