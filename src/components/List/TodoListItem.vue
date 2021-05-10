<template>
    <li>
        <TodoCheckButton 
            :class="{ 'checked' : item.complete }"
            @click.native="$emit('check', item)"/>
        <p class="label">{{ item.title }}</p>
    </li>
</template>

<script>
import TodoCheckButton from '@/components/Button/TodoCheckButton.vue'

export default {    
    name: 'TodoListItem',
    components: { TodoCheckButton },
    props: {
        item: {
            type: Object,
            require: true
        },
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
li {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    .label {
        padding-left: 5px;
        color: #fff;
        letter-spacing: 1px;
    }
}
</style>