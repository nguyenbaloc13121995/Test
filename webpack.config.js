module.exports = {
    entry: './1-font-end/index.jsx',
    output: {
        path: __dirname,
        filename: './public/bundles.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/,
            }, {
                test: /\.css$/,
                loader: "css-loader",
                options: {
                    alias: {
                        "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                    }
                },
            }
        ],
    }
}
