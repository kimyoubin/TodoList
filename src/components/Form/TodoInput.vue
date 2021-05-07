<template>
	<input 				
		:type="type"
		:placeholder="placeholder"
		:value="value"		
		@input="change" 
		>
</template>

<script>
export default {
	name: 'VueInput',
	props: {
		type: {
			type: String,
			default: ''
		},	
		placeholder: {
			type: String,
			default: ''
		},	
		value: {
			type: String,
			default: ''
		},	
	},
	data() {
		return {
			isActive: false,
		}
	},
	methods: {
		// 부모에게 input이벤트를 던저준다.
		// 반드시 input이벤트여야 함, v-model은 input이라는 이벤트로 받기 때문
		change: function($event) {
			this.$emit('input', $event.target.value)
		}
	}
}
</script>

<style lang="scss" scoped>
input {
	width: 100%;
	height: 100%;
	padding: 10px 20px;
	font-size: 14px;
	color: #333;
	border: 2px solid #fff;
	border-radius: 25px;
	transition: all .4s;
	&.on {
		box-shadow: 0 10px 10px rgba(0,0,0,.05);
		background-color: #fff;
	}
}

input {
	&::placeholder{
		font-size: 14px;
		color: #ddd;
	}
}

</style>
