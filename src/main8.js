import Vue from 'vue'
import VueRouter from 'vue-router'
//1. 需要注册
Vue.use(VueRouter);

//2. 定义组件
var appTemplate = '<div>';
		appTemplate += '<p>';
			appTemplate += '<router-link to="/foo">去foo</router-link>';
			appTemplate += ' <router-link to="/bar">去bar</router-link>';
		appTemplate += '</p>';
		appTemplate += '<router-view><router-view>';
	appTemplate += '/<div>';

Vue.component('App', {
	template: appTemplate
});
const Foo = {template: '<div>我是组件Foo的内容</div>'};
const Bar = {template: '<div>我是组件Bar的内容</div>'};

//3 .定义路由
//路由就是写明白 url路径与组件之间的对应关系
const router = new VueRouter({
  routes:[
	  { path: '/foo', component: Foo },
	  { path: '/bar', component: Bar }
	]
});



//Vue实例
new Vue({
	// el:'#wrapper',
	router: router,
	template: '<App></App>'
}).$mount('#wrapper');