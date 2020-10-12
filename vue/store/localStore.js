// import firebase from 'firebase/app'


export default {
    state: {
        table: {}
    },
    mutations: {
        RENDER_TABLE_m: (state) => {
            state.table = {
                item1: {
                    title: "Заявление на предоставление академического отпуска",
                    student: "Петров Василий Андреевич",
                    group: 333333,
                    comment: "Успешно"
                },
                item2: {
                    title: "Заявление на предоставление академического отпуска",
                    student: "Петров Василий Андреевич",
                    group: 333333,
                    comment: "Успешно"
                },
                item3: {
                    title: "Заявление на предоставление академического отпуска",
                    student: "Петров Василий Андреевич",
                    group: 333333,
                    comment: "Успешно"
                }
            }
            localStorage.setItem('table', (JSON.stringify(state.table)));
            state.table = null
        },
        GET_TABLE_m: (state) => {
            state.table = (JSON.parse(localStorage.getItem('table')));
        }
    },
    actions: {
        RENDER_TABLE({ commit }) {
            commit('RENDER_TABLE_m')
        },
        GET_TABLE({ commit }) {
            commit('GET_TABLE_m')
        }
    },
    getters: {
        CHECK_TABLE(state) {
            return state.table;
        },
    }
}