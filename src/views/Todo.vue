<template>
	<base-layout>
        <div class="wrap">
            <div class="todo-add">
                <todo-input
                    v-model="text"
                    @click.native="isActive = true"
                    @blur.native="isActive = false"
                    :class="{ 'on' : isActive }"
                    placeholder="please enter here"
                ></todo-input>
                <todo-button
                    @click.native="todoAdd">
                    <img src="@/assets/images/btn_go.png" alt="">
                </todo-button>
            </div>

            <div class="list-area">
                <todo-list
                    :items="todoList"
                    @check="todoCheck"
                ></todo-list>
            </div>
        </div>        
    </base-layout>
</template>

<script>
import BaseLayout from "@/layouts/index.vue";
import TodoList from "@/components/List/index.vue";
import TodoInput from '@/components/Form/TodoInput.vue';
import TodoButton from '@/components/Button/TodoButton.vue';

export default {
    name: 'Todo',
    components: {
        BaseLayout,
        TodoList,
        TodoInput,
        TodoButton
    },
    data() {
        return {
            text: '',
            isActive: false,
        }
    },
    computed: {
        todoList() {
            return this.$store.getters['Todo/todoList']
        }
    },
    methods: {
        todoAdd() {
            // todo 넘겨줄때 여기에 꼭 같이 넘겨줘야 함
            let todo = {
                title: this.text,
                complete: false
            }
            this.$store.dispatch('Todo/todoAdd', todo)
            if( this.text === '' ) {
                this.isActive = false
            } else {
                this.isActive = true
            }
        },
        todoCheck(item) {
            this.$store.dispatch('Todo/todoCheck', item)
            console.log('todo item', item)
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    padding: 0 30px;
}
.todo-add {
    position: relative;
    width: 100%;
    height: 50px;
    input {
        position: absolute;
        width: 100%;
        &.on {
            box-shadow: 0 10px 10px rgba(0,0,0,.05);
            background-color: #fff;
        }
    }
    button {
        position: absolute;
        right: 15px;
        top: 0;
        bottom: 0;
        margin: auto;
    }
}

.list-area {
    width: 100%;
    min-height: 300px;
    margin-top: 20px;
    padding: 40px 30px;
    background-color: rgba(255,255,255,.1);
    border-radius: 25px;
}

</style>