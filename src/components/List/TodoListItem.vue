<template>
    <li>
        <TodoCheckbox
            name="check"
            id="check"
        />
        listItem
    </li>
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