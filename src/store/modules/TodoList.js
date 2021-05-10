export default {
    namespaced: true,
    state: {
        /**
         * list: [
         *      {
         *      title: String,
         *      complete: Boolean
         *      }
         * ]
         */
        list: []
    },
    getters: {
        todoList(state) {
            return state.list
        }
    },
    mutations: {
        todoAdd(state, todo) {
            state.list.push(todo)
        },
        todoCheck(state, item) {
            let itemIndex = state.list.indexOf(item)
            if (itemIndex >= 0) {
                state.list[itemIndex].complete = !state.list[itemIndex].complete
            }
            console.log('itemIndex', itemIndex);
            // item.complete = !item.complete
            // console.log('state item.complete ::', item.complete)
            // console.log('state state.list ::', state.list);
            // console.log('state state.list ::', state.list[itemIndex].complete);
        }
    },
    actions: {
        todoAdd({ commit }, todo) {
            commit('todoAdd', todo)
        },
        todoCheck({ commit }, item) {
            commit('todoCheck', item)
        }
    }
}