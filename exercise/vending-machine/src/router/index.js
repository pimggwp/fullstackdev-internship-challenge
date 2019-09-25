import Vue from 'vue'
import Router from 'vue-router'
import vendingConsole from '@/components/vendingConsole'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'vendingConsole',
        component: vendingConsole
    }, ],
    mode: 'history',
})