import Vue from 'vue'
new Vue({
	data:{
		times: 0
	},
	methods:{
		incrTimes: function(){
			this.times++
		}
	}
}).$mount('#wrapper');