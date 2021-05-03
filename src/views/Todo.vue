<template>
	<base-layout>
        <todo-list></todo-list>
    </base-layout>
</template>

<script>
import BaseLayout from "@/layouts/index.vue";
import TodoList from "@/components/List/index.vue";

export default {
    name: 'Todo',
    components: {
        BaseLayout,
        TodoList
    }
}
</script>
