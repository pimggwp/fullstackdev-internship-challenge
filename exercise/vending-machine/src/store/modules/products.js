const state = {
    products: []
}
const getters = {
    getProducts(state) {
        return state.products
    }
}
const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
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

    }
}
export default {
    state,
    mutations,
    getters,
    actions
}