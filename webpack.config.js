const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = () => {
    return {
        mode : "development",
        entry : ["@babel/polyfill", "./src/index.tsx"],
        output : {
            path : __dirname + './dist',
            filename : "componentsBundle.js"
        },

        resolve : {extensions: ['.tsx', '.ts', '.js']},

        module : {
            rules : [
                { test : /\.css/, use : ['style-loader', 'css-loader']},
                { test : /\.(ts|tsx)/, use : 'babel-loader', exclude: /node_modules/}
            ]
        },
        plugins : [
            new HtmlWebpackPlugin({
                template : './src/index.html'
            })
        ]
    }
}