<template>
    <div>
        <todo-checkbox></todo-checkbox>
        listItem
    </div>
</template>

<script>
import TodoCheckbox from '@/components/Form/TodoCheckbox.vue'

export default {    
    name: 'TodoListItem',
    components: { TodoCheckbox },
}
</script>

<style>

</style>