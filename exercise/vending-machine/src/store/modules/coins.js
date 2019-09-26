const state = {
    coins: [{
        value: 10,
        image: '10.png',
    }, {
        value: 5,
        image: '5.png',
    }, {
        value: 2,
        image: '2.png',
    }, {
        value: 1,
        image: '1.png',
    }],
    total: 0,
    return_coin: false,
}
const getters = {
    getCoins(state) {
        return state.coins
    },
    getTotal(state) {
        return state.total
    },
    getReturnCoin(state) {
        return state.return_coin
    }
}
const mutations = {
    ADD_TOTAL(state, total) {
        state.total += total;
    },
    DECREASE_TOTAL(state, price) {
        state.total -= price;
    },
    RESET_TOTAL(state) {
        state.total = 0;
    },
    IS_RETURN(state) {
        state.return_coin = true;
    },
    NOT_RETURN(state) {
        state.return_coin = false;
    }
}
const actions = {
    addTotal({ commit }, total) {
        commit('ADD_TOTAL', total);
    },
    decreaseTotal({ commit }, price) {
        commit('DECREASE_TOTAL', price);
    },
    resetTotal({ commit }) {
        commit('RESET_TOTAL')
    },
    is_return({ commit }) {
        commit('IS_RETURN')
    },
    not_return({ commit }) {
        commit('NOT_RETURN')
    }
}
export default {
    state,
    mutations,
    getters,
    actions
}