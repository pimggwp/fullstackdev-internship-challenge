const state = {
    coins: [{
        value: 1,
        title: '1 THB',
        image: '1.png',
    }, {
        value: 2,
        title: '2 THB',
        image: '2.png',
    }, {
        value: 5,
        title: '5 THB',
        image: '5.png',
    }, {
        value: 5,
        title: '5 THB',
        image: '5.png',
    }]
}
const getters = {
    getCoins(state) {
        return state.coins
    }
}
const mutations = {

}
const actions = {

}
export default {
    state,
    mutations,
    getters,
    actions
}