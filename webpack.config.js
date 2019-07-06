const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:{
        main:'./src/main'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        publicPath: "/dist/",
        filename: "main.js"
    },
    module: {
        rules: [{
            test:/\.vue$/,
            loader: "vue-loader",
            options: {
                loaders:{
                    css:ExtractTextPlugin.extract({
                        use:'css-loader',
                        fallback:'vue-style-loader'
                    })
                }
            }
        },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },
            {
                test:/\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
};

