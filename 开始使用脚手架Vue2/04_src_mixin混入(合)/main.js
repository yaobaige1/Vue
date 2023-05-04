import Vue from 'vue'
import App from './App'
// 全局混合引入
import { hunhe1,hunhe2 } from "./mixin";
Vue.mixin(hunhe1)
Vue.mixin(hunhe2)
 new Vue({
    el:'#app',
    render:h=>h(App)
}) 
