<template>
	<div class="checkbox">
        <input 
            type="checkbox"
            :name="name"
            :id="id"
            :value="value"
            @input="change">
        <label :for="id">{{ label }}</label>
    </div>
</template>

<script>
export default {
	name: 'TodoCheckbox',
	props: {
        name: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        value: {
            type: Boolean,
            false: ''
        },
        label: {
            type: String,
            default: ''
        }
	},
	data() {
		return {
		}
	},
	methods: {
        change($event) {
            this.$emit('input', $event.target.checked)
        }
	}
}
</script>

<style lang="scss" scoped>
.checkbox {
    input {
        display: none;
        &:checked {
            +label {
                    text-decoration: line-through;
                    &:before {
                    left: 5px;
                    top: 1px;
                    width: 10px;
                    height: 7px;
                    border: 2px solid #fff;
                    border-top: 0;
                    border-right: 0;
                    transform: rotate(-45deg);
                    z-index: 1;
                }
            }
        }
        +label {
            position: relative;
            display: block;
            padding-left: 30px;
            color: #fff;
            text-align: left;
            font-size: 14px;
            &:before,
            &:after {
                content: '';
                display: inline-block;
                position: absolute;
                margin: auto;
            }                                  
            &:after {
                top: 0;
                bottom: 0;
                left: 0;
                width: 20px;
                height: 20px;
                border: 2px solid #d4d4d4
            }
        }
    }
}
</style>
