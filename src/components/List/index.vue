<template>
    <ul>
        <TodoListItem 
            v-for="(item, key) in items"
            :key="key"/>
    </ul>
</template>

<script>
import TodoListItem from '@/components/List/TodoListItem.vue'
export default {
    name: 'TodoList',
    components: { TodoListItem },
    props: {
        items: {
            type: Array,
        },
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>