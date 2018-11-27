const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js', //指定打包的入口
  output: {
    path: __dirname + "/dist",//__dirname 是webpack文件所在路径的绝对路径
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ //打包html
      title: '首页',//生成页面的标题
      filename: 'index.html',//dist 目录生成的文件名
      template: './src/index.html'// 原来的index.html  作为模板
    })
  ]
};