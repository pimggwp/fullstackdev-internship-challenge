import { stat } from "fs"

const state = {
    products: [],
    product_order: null
}
const getters = {
    getProducts(state) {
        return state.products
    },
    getProductOrder(state) {
        return state.product_order
    }
}
const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    ADD_PRODUCT(state, product) {
        state.product_order = product
        setTimeout(function() {
            state.product_order = null
        }, 2000)
    }
}
const actions = {
    loadProducts({ commit }) {
        axios
            .get('https://www.mocky.io/v2/5c77c5b330000051009d64c9')
            .then(r => {
                commit('SET_PRODUCTS', r.data)
                console.log(r.data)
            })

    },
    addProduct({ commit }, product) {
        commit('ADD_PRODUCT', product)
    }

}
export default {
    state,
    mutations,
    getters,
    actions
}