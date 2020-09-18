const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配 css 文件
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true // 缓存

          }
        }
      },
      // 配置sass
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]
  },

//  配置插件 加载html
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: true
      }
    )
  ],
  devServer: {
    // open:'C:\\Program Files (x86)\\Google\\Chrome\\Application/chrome.exe'// 打开本机chrome
    open: true, // 打开默认的浏览器
    compress: true, // 启动gzip 压缩
    host: 'localhost',
    port: 8080,
    hot: true,  // 模块热更新（热模替换）
    // 问题：html文件无法自动更新了，需要增加一个入口 因为 ./src/index.html 不经过 入口文件
    // main:['./src/index.html']
  },
}
