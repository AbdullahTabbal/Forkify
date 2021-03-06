const path = require('path');
const HtmkWebpackPlugin = require('html-webpack-plugin');
module.exports= {

    entry: ['./src/js/index.js'],
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'

    },
    devServer: {
        contentBase: './dist'
        
    },
    plugins:[
        new HtmkWebpackPlugin({
            filename:"index.html",
            template:'./src/index.html',
            inject: false 

        })
    ],
    module:{
rules:[
    {
        test:/\.js$/,
        exclude:/node_modules/,
        use: {
            loader:'babel-loader'
        }
    }

]

    }
};