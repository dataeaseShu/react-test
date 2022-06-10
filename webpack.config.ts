const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
import webpack, { Configuration } from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

const config: Configuration = {
    mode: "development",
    //...
    entry: "./src/main.tsx", // 替换成tsx
    //...
    plugins: [
        new HtmlWebPackPlugin({
            title: 'react app',
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            //...,
            {
                test: /\.(ts|tsx)$/,// 替换成ts｜tsx
                exclude: /(node_modules|bower_components)/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      cacheDirectory: true
                    }
                  }
                ]
             }
            //...
        ]
    },
    resolve: {
      // 将.js｜.jsx 删除 替换成.ts|.tsx新增加 .less
      extensions: ['.tsx', '.js', '.ts', '.less', '.css']
    }
}
// 之前是直接命令行之行的代码，因为使用ts-node 所以使用ts运行webpack-dev-server
const devserver = new WebpackDevServer({
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true, // 热更新
  host: '127.0.0.1', // 地址
  port: '8081', // 端口
  open: true, // 是否自动打开
  setupExitSignals: true,
  compress: true
}, webpack(config))
// 启动
devserver.start()