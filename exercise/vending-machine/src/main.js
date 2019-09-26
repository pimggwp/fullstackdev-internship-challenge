// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import './App.css';

Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios)

window.axios = require('axios');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    axios,
    store,
    components: { App },
    template: '<App/>'
})