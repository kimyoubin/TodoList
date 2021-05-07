export default {
    namespaced: true,
    state: {
        list: [
            // {
            //     title: 'title1',
            //     complete: false,
            // },
        ]
    },
    getters: {
        todoList(state) {
            return state.list
        }
    },
    mutations: {
        todoAdd(state, todo) {
            state.list.push(todo)
        }
    },
    actions: {
        todoAdd({ commit }, todo) {
            commit('todoAdd', todo)
        }
    }
}