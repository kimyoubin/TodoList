import Vue from 'vue'
import Vuex from 'vuex'

import TodoList from '@/store/modules/TodoList.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      Todo: TodoList
    }
})
