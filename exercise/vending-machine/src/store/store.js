import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import coins from './modules/coins'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        products,
        coins
    }
})