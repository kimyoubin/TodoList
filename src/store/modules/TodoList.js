export default {
    namespaced: true,
    state: {
        /**
         * list: [
         *      {
         *          title: String,
         *          complete: Boolean
         *      }
         * ]
         */
        list: localStorage.getItem('todoList')
            // parse는 문자열을 객체로 변환시켜준다.
            ? JSON.parse(localStorage.getItem('todoList'))
            : [],
    },
    getters: {
        // todoList
        todoList(state) {
            return state.list
        },
        // todoList 전체 갯수
        todoListAll(state) {
            return state.list.length
        },
        // todoList 완료된 갯수 
        todoListComplete(state) {
            return state.list.filter((state) => state.complete).length
        },        
        
    },
    mutations: {
        todoAdd(state, todo) {
            state.list.push(todo)
            // stringify는 JSON 객체를 문자열로 변환시켜줌
            localStorage.setItem('todoList', JSON.stringify(state.list));
            // console.log(JSON.stringify(state.list))
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
        },
    }
}