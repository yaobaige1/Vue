import Vue from 'vue'
import App from './App'
import plugins from './plugins'

Vue.use(plugins)
new Vue({
    el:'#app',
    render:h=>h(App)
})