import { stat } from "fs"

const state = {
    products: [],
    product_orders: []
}
const getters = {
    getProducts(state) {
        return state.products
    },
    getProductOrders(state) {
        return state.product_orders
    }
}
const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    ADD_PRODUCT(state, product) {
        state.product_orders.push(product)
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