import Vue from 'vue'
//注册各种组件(实际应用不是这么写的，一般都是单文件组件，这里是为了展示)
Vue.component('App', {
	template: '<div><Header></Header><Body></Body><Footer></Footer></div>'
});
Vue.component('Header', {
	template: '<div>头部</div>'
});
Vue.component('Body', {
	template: '<div><Item></Item><Item></Item></div>'
});
Vue.component('Item', {
	template: '<p>我是一个item</p>'
});
Vue.component('Footer', {
	template: '<div>尾部</div>'
});
//Vue实例
new Vue({
	// el:'#wrapper',
	template: '<App></App>'
}).$mount('#wrapper');