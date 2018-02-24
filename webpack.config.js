const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
	devServer:{
	    //设置基本目录结构
	    contentBase:path.resolve(__dirname),
	    //服务器的IP地址，可以使用IP也可以使用localhost
	    host:'localhost',
	    //服务端压缩是否开启
	    compress:true,
	    //配置服务端口号
	    port:1717,
	    //源文件变更自动编译
	    inline: true
	},
	module:{
	}
}
