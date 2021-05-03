export default {
    namespaced: true,
    state: {
        list: [
            {
                title: 'title1',
            },
            {
                title: 'title2'
            }
        ]
    },
    getters: {
        todoList(state) {
            return state.list
        }
    },
    mutations: {
        todoAdd() {
            
        }
    },
    actions: {
        todoAdd({ commit }) {
            commit('todoAdd')
        }
    }
}