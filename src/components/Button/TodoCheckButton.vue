<template>
	<button class="checkbox">
    </button>
</template>

<script>
export default {
	name: 'TodoCheckButton',
	props: {
        
	},
	data() {
		return {

		}
	},
	methods: {
        // change($event) {
        //     this.$emit('input', $event.target.checked)
        // }
	}
}
</script>

<style lang="scss" scoped>
.checkbox {
    &.checked {
        &:before {
            left: 3px;
            top: 2px;
            width: 10px;
            height: 7px;
            border: 2px solid #fff;
            border-top: 0;
            border-right: 0;
            transform: rotate(-45deg);
            z-index: 1;
        }
    }
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    border: 2px solid #d4d4d4;
    &:before {
        content: '';
        display: inline-block;
        position: absolute;
        margin: auto;
    }  
}
</style>
