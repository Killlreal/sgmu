export default {

    ADD_FIELD({ commit }, item) {
        commit('SET_FIELD', item);
    },
    ADD_ADMIN({ commit }, id) {
        commit('SET_ADMIN', id);
    },
    DELETE_FIELD({ commit }, index) {
        commit('DEL_FIELD', index);
    },
    CHANGE_FIELD({ commit }, index) {
        commit('CHANG_FIELD', index);
    },
    CHANGE_MAINTITLE({ commit }, title) {
        commit('CHANG_MAINTITLE', title);
    },
    CHANGE_EXPIRED({ commit }, expired) {
        commit('CHANG_EXPIRED', expired);
    },
    SAVE_FORM({ commit }) {
        commit('SAV_FORM');
    },
    GET_FORM({ commit }) {
        commit('GET_FORM_m');
    }
}