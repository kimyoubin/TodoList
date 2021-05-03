export default {
    namespaced: true,
    state: {
        TodoList: [
            {
                title: 'title1',
            },
            {
                title: 'title2'
            }
        ]
    },
    getters: {

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