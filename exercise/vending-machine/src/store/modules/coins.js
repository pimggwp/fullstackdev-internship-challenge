const state = {
    coins: [{
        value: 1,
        image: '1.png',
    }, {
        value: 2,
        image: '2.png',
    }, {
        value: 5,
        image: '5.png',
    }, {
        value: 10,
        image: '10.png',
    }],
    total: 0
}
const getters = {
    getCoins(state) {
        return state.coins
    },
    getTotal(state) {
        return state.total
    }
}
const mutations = {
    ADD_TOTAL(state, money) {
        state.total += money;
    },
}
const actions = {
    addTotal({ commit }, total) {
        commit('ADD_TOTAL', total);
    },
}
export default {
    state,
    mutations,
    getters,
    actions
}