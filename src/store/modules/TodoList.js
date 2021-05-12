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
        // todoList 추가
        todoAdd(state, todo) {
            state.list.push(todo)
            // stringify는 JSON 객체를 문자열로 변환시켜줌
            
            localStorage.setItem('todoList', JSON.stringify(state.list))
        },
        // todoList 완료여부 체크
        todoCheck(state, item) {
            let itemIndex = state.list.indexOf(item)
            if (itemIndex >= 0) {
                state.list[itemIndex].complete = !state.list[itemIndex].complete
            }
            // console.log('itemIndex', itemIndex)
            // item.complete = !item.complete
            // console.log('state item.complete ::', item.complete)
            // console.log('state state.list ::', state.list[0].complete)
            // console.log('state state.list ::', state.list[itemIndex].complete)

            localStorage.setItem('todoList', JSON.stringify(state.list))                      
        },
        // todoList 한개 삭제
        todoDelete(state, item) {            
            let itemIndex = state.list.indexOf(item)
            if (itemIndex >= 0) {
                // console.log('클릭')
                state.list.splice(itemIndex, 1)
            }

            localStorage.setItem('todoList', JSON.stringify(state.list))
        },
        // todoList 전체 삭제
        todoAllClear(state) {
            state.list = []

            localStorage.setItem('todoList', JSON.stringify(state.list))
        }
    },
    actions: {
        todoAdd({ commit }, todo) {
            commit('todoAdd', todo)
        },
        todoCheck({ commit }, item) {
            commit('todoCheck', item)
        },
        todoDelete({ commit }, item) {
            commit('todoDelete', item)
        },
        todoAllClear({ commit }) {
            commit('todoAllClear')
        }
    }
}