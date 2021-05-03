<template>
	<base-layout>
        <div class="todo-add">
            <todo-input
                v-model="text"></todo-input>
            <todo-button
                @click.native="todoAdd"></todo-button>
        </div>
        <todo-list
            :items="todoList"
        ></todo-list>
    </base-layout>
</template>

<script>
import BaseLayout from "@/layouts/index.vue";
import TodoList from "@/components/List/index.vue";
import TodoInput from '@/components/Form/TodoInput.vue';
import TodoButton from '@/components/Button/TodoButton.vue';

export default {
    name: 'Todo',
    components: {
        BaseLayout,
        TodoList,
        TodoInput,
        TodoButton
    },
    data() {
        return {
            text: ''
        }
    },
    computed: {
        todoList() {
            return this.$store.getters['Todo/todoList']
        }
    },
    methods: {
        todoAdd() {
            console.log('click')
            let todo = {
                title: this.text
            }
            this.$store.dispatch('Todo/todoAdd', todo)
        }
    }
}
</script>

<style lang="scss" scoped>
.todo-add {
    position: relative;
    width: 100%;
    height: 50px;
    input {
        position: absolute;
        width: 100%;
    }
    button {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
}

</style>