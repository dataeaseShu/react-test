const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    target: 'web', //
    entry: "/src/main.js",
    output: {
        filename: 'bundle[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: { //开发服务器的配置
        port: 3000,//自定义访问的端口号
        open: true, // 
        hot: true,
        // static: { // static: ['assets']
        //     directory: path.join(__dirname, 'src')
        // },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'react app',
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"] // 引入文件可以忽略后缀
    },
}