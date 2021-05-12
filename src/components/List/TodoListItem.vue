<template>
    <div class="list-item">
        <div class="left-area">
            <TodoCheckButton 
                :class="{ 'checked' : item.complete }"
                @click.native="$emit('check', item)"/>
            <p :class="{ 'complete' : item.complete }"
                class="label">{{ item.title }}
            </p>
        </div>
        <div class="right-area">
            <button 
                @click="todoDelete(item)"
                class="close"
            >close button</button>
            <div class="date">{{ $moment().format('YY.MM.DD ddd') }}</div>
        </div>
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
        todoDelete(item) {
            this.$store.dispatch('Todo/todoDelete', item)
        }
    }
}
</script>

<style lang="scss" scoped>
.list-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(255,255,255,.2);
    .left-area {        
        display: flex;
        align-items: center;
        .label {
            padding-left: 10px;
            color: #fff;
            letter-spacing: 1px;
            &.complete {
                color: rgba(255,255,255,.5);
                text-decoration: line-through;
            }
        }
    }
    .right-area {        
        .close {            
            position: relative;
            width: 12px;
            height: 12px;
            top: -5px;
            right: 0;
            font-size: 0;
            &::before, &::after {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                background-color: #fff;
                transform: translate(-50%,-50%) rotate(45deg);
            }
            &::before {
                width: 1px;
                height: 100%;
            }
            &::after {
                width: 100%;
                height: 1px;
            }
        }
        .date {
            position: absolute;
            right: 0;
            top: 15px;
            color: #fff;
            font-size: 10px;
            letter-spacing: 1px;
        }
    }
}
</style>