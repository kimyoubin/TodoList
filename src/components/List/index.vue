<template>
    <div>
        <div v-if="items.length > 0">
            <TodoListItem 
                v-for="(item, key) in items"
                :key="key"
                :item="item"
                @check="$emit('check', item)"/>
        </div>
        <div 
            class="no-list"
            v-else>no list ,, :(</div>
    </div>
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
    }
}
</script>

<style lang="scss" scoped>
.no-list {
    font-size: 14px;
    color: rgba(255,255,255,.7);
}
</style>