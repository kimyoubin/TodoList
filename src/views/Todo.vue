<template>
	<base-layout>
        <todo-list
            :items="todoList"
        ></todo-list>
    </base-layout>
</template>

<script>
import BaseLayout from "@/layouts/index.vue";
import TodoList from "@/components/List/index.vue";

export default {
    name: 'Todo',
    components: {
        BaseLayout,
        TodoList
    },
    computed: {
        todoList() {
            return this.$store.getters['Todo/todoList']
        }
    }
}
</script>
