<template>
    <div>
        <TodoCheckButton 
            :class="{ 'checked' : item.complete }"
            @click.native="$emit('check', item)"/>
        <p class="label">{{ item.title }}</p>
    </div>
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
div {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    .label {
        padding-left: 10px;
        color: #fff;
        letter-spacing: 1px;
    }
}
</style>