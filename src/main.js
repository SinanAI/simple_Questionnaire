import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.devtools = true;

new Vue({
    el:'#app',
    components:{App},
    template:'<App/>',
    // render: h => h('app')
})