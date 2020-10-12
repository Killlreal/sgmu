export default {
    state: {
        forms: [],
        grops: [],
        courses: [],
        people: [],
        userId: null,
        userGroup: null,
        userCourse: null,
        userName: null,
    },
    mutations: {
        SEARCH_PEOPLE: (state, query) => {
            console.log("try to fetch people")
            fetch('/personapi/find/'+query,{
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                state.people = data
            });
        },
        FETCH_FORMS_m: (state, userId) => {
            console.log("try to fetch forms")
            fetch('/formapi/user/'+userId,{
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                state.forms = data
            });
        },
        FETCH_GROUPS_m: (state) => {
            console.log("try to fetch groups")
            fetch('/personapi/groups/',{
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                state.groups = data
            });
        },
        FETCH_COURSES_m: (state) => {
            console.log("try to fetch courses")
            fetch('/personapi/courses/',{
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                state.courses = data
            });
        },
        REGISTER_USER_m: (state, user) => {
            state.userId = user.id
            state.userName = user.name
            if (user.role == 'user'){
                state.userGroup = user.group
                state.userCourse = user.course
            }
        },
    },
    actions: {
        FETCH_GROUPS: ({ commit }) => {
            console.log("try to commit mutation")
            commit('FETCH_GROUPS_m')
        },
        FETCH_PEOPLE: ({ commit }, query) => {
            console.log("try to commit mutation")
            commit('SEARCH_PEOPLE', query)
        },
        FETCH_COURSES: ({ commit })  => {
            console.log("try to register user")
            commit('FETCH_COURSES_m')
        },
        FETCH_FORMS: ({ commit }, id) => {
            console.log("try to commit mutation")
            commit('FETCH_FORMS_m', id)
        },
        REGISTER_USER: ({ commit }, user)  => {
            console.log("try to register user")
            commit('REGISTER_USER_m', user)
        },
        REMEMBER_USER: async ({commit}) =>  {
            console.log("try to remeber user")
            let user = localStorage.getItem('userId')
            console.log('try to fetch user');
            let url = '/personapi/user/'+user
            await fetch(url,{
              method: 'POST',
            })
            .then(response => response.json())
            .then(user => {
                commit('REGISTER_USER_m', user)
            });
        }
    },
    getters: {
        USER_NAME(state) {
            return state.userName;
        },
        USER_ID(state) {
            return state.userId;
        },
        COURSES(state) {
            return state.courses;
        },
        GROUPS(state) {
            return state.groups;
        },
        FORMS: (state) => {
            console.log("try to get forms")
            return state.forms;
        },
        PEOPLE: (state) => {
            console.log("try to get people")
            return state.people;
        },
    }
}