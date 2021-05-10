<template>
    <ul>
        <TodoListItem 
            v-for="(item, key) in items"
            :key="key"
            :item="item"
            @check="$emit('check', item)"/>
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
    },
    methods: {
        // todoCheck(item) {
        //     this.
        // }
    }
}
</script>

<style>

</style>