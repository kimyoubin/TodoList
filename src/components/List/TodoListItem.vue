<template>
    <li>
        <TodoCheckbox
            :name="check"
            :id="check"
            :label="item.title"
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

<style>

</style>