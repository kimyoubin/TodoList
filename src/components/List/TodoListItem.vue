<template>
    <li>
        <TodoCheckbox
            name="check"
            id="check"
            :label="item.title"
            v-model="item.complete"
        />
    </li>
</template>

<script>
import TodoCheckbox from '@/components/Form/TodoCheckbox.vue'

export default {    
    name: 'TodoListItem',
    components: { TodoCheckbox },
    props: {
        item: {
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="scss" scoped>
li {
    margin-bottom: 25px;
}
</style>