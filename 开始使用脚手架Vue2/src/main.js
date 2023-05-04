import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select ,Row,Menu,MenuItem,Submenu} from 'element-ui';
import App from './App'
import VueRouter from 'vue-router';
import router from './router'
Vue.use(VueRouter)

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Submenu.name, Submenu);
// 或者

// Vue.use(ElementUI)
new Vue({
    el:'#app',
    render:h=>h(App),
    router:router
})