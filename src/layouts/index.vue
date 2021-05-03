<template>
    <div>
        <todo-header></todo-header>
        <slot></slot>
        <todo-footer></todo-footer>
    </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue'
import TodoFooter from './TodoFooter.vue'

export default {
    components: { TodoHeader, TodoFooter },

}
</script>
        

<style>

</style>