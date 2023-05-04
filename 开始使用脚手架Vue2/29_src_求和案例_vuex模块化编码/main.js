import Vue from 'vue'
import App from './App'
//导入store并使用vuex
import store from './store'
const vm = new Vue({
    el:'#app',
    render:h=>h(App),
    store
})
console.log(vm);