1. 安装webpack
npm install webpack webpack-cli --save-dev
```
module.exports = {
  entry: './src/main.js', //指定打包的入口
  output: {
    path: __dirname + "/dist",//__dirname 是webpack文件所在路径的绝对路径
    filename: "build.js"
  }
}
```
2. 安装打包css插件
npm install  style-loader css-loader --save-dev
```
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
```
3. 执行webpack
npx webpack --config webpack.config.js  
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"  /*npm run build 相当于 npx webpack --config webpack.config.js*/
  },
```
修改scripts 执行只需要 npm run build
4. 安装打包html插件
npm install html-webpack-plugin --save-dev  这样就不用再html引入build.js