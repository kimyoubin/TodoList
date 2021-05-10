<template>
	<base-layout>
        <div class="wrap">
            <ul class="todo-count">
                <li class="complete">{{ todoListComplete }}</li>
                <li class="all">{{ todoListAll }}</li>
            </ul>

            <div class="todo-add">
                <todo-input
                    v-model="text"
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
        }
    },
    computed: {
        todoList() {
            return this.$store.getters['Todo/todoList']
        },
        todoListAll() {
            return this.$store.getters['Todo/todoListAll']
        },
        todoListComplete() {
            return this.$store.getters['Todo/todoListComplete']
        },       
    },
    methods: {
        todoAdd() {           
            if( this.text === '' ) {
                alert('내용을 입력해주세요');
                
            } else {                
                // todo 를 store에 넘겨줄때 여기에 꼭 같이 넘겨줘야 함
                let todo = {
                    title: this.text,
                    complete: false
                }
                this.$store.dispatch('Todo/todoAdd', todo)
                this.text = ''
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

.todo-count {
    display: flex;
    align-items: baseline;
    margin-bottom: 40px;
    color: #fff;
    .complete {
        position: relative;
        padding-right: 25px;
        margin-right: 5px;
        font-size: 60px;
        &::after {
            content: '/';
            display: block;
            position: absolute;
            right: 0;
            bottom: 3px;
            font-size: 50px;
        }
    }
    .all {
        font-size: 30px;
    }
}

.todo-add {
    position: relative;
    width: 100%;
    height: 50px;
    input {
        position: absolute;
        width: 100%;
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