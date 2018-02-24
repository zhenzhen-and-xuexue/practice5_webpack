### 前端为啥需要webpack
现在的前端网页功能丰富，特别是SPA（single page web application 单页应用）技术流行后，JavaScript的复杂度增加和需要一大堆依赖包，还需要解决SCSS，Less……新增样式的扩展写法的编译工作。所以现代化的前端已经完全依赖于WebPack的辅助了。
现在最流行的三个前端框架，可以说和webpack已经紧密相连，框架官方都推出了和自身框架依赖的webpack构建工具。

- React.js+WebPack
- Vue.js+WebPack
- Angular.js+WebPack

从此可以看出，无论你前端走那条线，你都要有很强的Webpack知识，才能祝你成为这个框架领域的大牛。

### 啥是webpack
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Sass，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。在3.0出现后，Webpack还肩负起了优化项目的责任。可以看出重点如下

- 模块化： 便于多人协同开发，有面向对象的意思
- 打包：可以把多个Javascript文件打包成一个文件，减少服务器压力和下载带宽。
- 转换：把拓展语言(less,es高版本等)转换成为普通的JavaScript，让浏览器顺利运行。
- 优化：前端变的越来越复杂后，性能也会遇到问题，而WebPack也开始肩负起了优化和提升性能的责任。

### 1.打包js
js是webpack原生支持的模块，只要按照规定的写法，就能轻松实现模块化<br />
如下面是要用Jquery的html()方法往div#root里面写一句话，按照面向对象的思想，这句话需要由一个类提供<br />
![20](https://raw.githubusercontent.com/wiki/sodyxiezhen/practice3_less/30.png)<br />
引入模块，import ,require均可<br />
![20](https://raw.githubusercontent.com/wiki/sodyxiezhen/practice3_less/31.png)<br />
模块自身的写法 export 
![20](https://raw.githubusercontent.com/wiki/sodyxiezhen/practice3_less/32.png)<br />
最后打包成bundle.js就可以轻松实现啦
![20](https://raw.githubusercontent.com/wiki/sodyxiezhen/practice3_less/33.png)<br />

### 项目运行步骤
1. 把仓库克隆到本地<br />
	git clone https://github.com/zhenzhen-and-xuexue/practice5_webpack.git
2. 安装依赖包<br />
	npm install
3. 构建项目，webpack打包<br />
	npm run build
4. 运行服务器，<br />
	npm run server 
5. 预览查看<br />
	浏览器栏输入 http://localhost:1717

### 练习
- 思考webpack工作方式，webpack.config.js的配置，自己动手打包一个js文件