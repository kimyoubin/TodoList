<template>
	<base-layout>
        <div class="wrap">
            <ul class="count-area">
                <li class="complete">{{ todoListComplete }}</li>
                <li class="all">{{ todoListAll }}</li>
            </ul>
        
            <div class="add-area">
                <todo-input
                    v-model="text"
                    @keyup.native.enter="todoAdd"
                    placeholder="please enter here"
                ></todo-input>
                <todo-button
                    btnType="btn-add"
                    @click.native="todoAdd">
                    <img src="@/assets/images/btn_go.png" alt="">
                </todo-button>
            </div>

            <div class="filter-area">
                <todo-select
                    v-model="selected"
                    @change.native="changeSelect"
                    :items="selectList"
                ></todo-select>
                <todo-button
                    @click.native="todoAllClear"
                    btnType="btn-clear"
                >All Clear</todo-button>
            </div>

            <div class="list-area">
                <todo-list
                    :items="todoList"
                    @check="todoCheck"
                ></todo-list>
            </div>
            <p style="color: #fff">{{selected}}</p>
        </div>        
    </base-layout>
</template>

<script>
import BaseLayout from "@/layouts/index.vue";
import TodoList from "@/components/List/index.vue";
import TodoInput from '@/components/Form/TodoInput.vue';
import TodoButton from '@/components/Button/TodoButton.vue';
import TodoSelect from '@/components/Form/TodoSelect.vue';

export default {
    name: 'Todo',
    components: {
        BaseLayout,
        TodoList,
        TodoInput,
        TodoButton,
        TodoSelect
    },
    data() {
        return {
            text: '',
            selected: '',
            selectList: [
                {
                    option: 'Latest',
                    value: '1'              
                },
                {
                    option: 'Oldest',
                    value: '2' 
                }
            ]
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
                    complete: false,
                    writeDate: this.$moment().format('YY.MM.DD dddd')
                }
                this.$store.dispatch('Todo/todoAdd', todo)
                this.text = ''
            }
        },
        todoCheck(item) {
            this.$store.dispatch('Todo/todoCheck', item)
            console.log('todo item', item)
        },
        todoAllClear() {
            this.$store.dispatch('Todo/todoAllClear')
        },
        changeSelect() {
            if( this.selected === '1' ) {
                console.log('Latest')
            } else {
                console.log('Oldest')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    padding: 0 30px;
}

.count-area {
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

.add-area {
    position: relative;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
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

.filter-area {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.list-area {
    width: 100%;
    min-height: 300px;
    padding: 40px 30px;
    background-color: rgba(255,255,255,.1);
    border-radius: 25px;
}

</style>