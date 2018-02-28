const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require("extract-text-webpack-plugin");
var website = {
	publicPath: '/dist/'
};
module.exports = {
	devtool: 'eval-source-map',
  entry:  {
  	// entry: __dirname + "/src/main.js",//第一节，打包简单js的入口文件
  	// entry2: __dirname + "/src/main2.js",//第二节，打包css的入口文件
  	// entry3: __dirname + "/src/main3.js",//第三节，打包css里面的图片
  	// entry4: __dirname + "/src/main4.js"//第四节，打包html里面的图片
  	entry5: __dirname + "/src/main5.js"//第五节，打包bootstrap
  },//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "bundle-[name].js",//打包后输出文件的文件名
    publicPath: website.publicPath//图片等资源的url前缀
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
		rules: [
			//css文件的打包
            // {
            //   test: /\.css$/,
            //   use: [ 'style-loader', 'css-loader' ]
            // }
            // css文件的打包和分离，用到了 extrace-text
            {
		        test: /\.css$/,
		        use: extractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		    },
		    //图片文件的打包
		    {
               test:/\.(png|jpg|gif)/ ,
               use:[{
                   loader:'url-loader',
                   options:{
                       limit:5000,
                       outputPath:'images/',
                       name:'[name].[ext]'
                   }
               }]
            },
            //html(内容里面有图片img)文件的打包
            {
	　　　　　　test: /\.(html|htm)$/,
	　　　　　　loader: 'html-withimg-loader'
	　　　　 },
			//bootstrap里面的eot,woff,ttf,svg资源
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
	},
	plugins:[
		new extractTextPlugin("styles.css"),
		new webpack.ProvidePlugin({
	        $:"jquery",
	        jQuery: "jquery"
	    })
	]
}
