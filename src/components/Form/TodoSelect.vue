<template>
    <select
        @change="changeSelect">
        <option 
            v-for="(item, key) of items"
            :key="key"
            :value="item.value"
        >{{ item.option }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'TodoSelect',
    props: {
        value: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
        }
    },
    methods: {
        changeSelect($event) {
            this.$emit('input', $event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
select {
    width: 100px;
    height: 30px;
    padding: 5px;
    color: #fff;
    font-size: 12px;
    text-align-last: center;
    background: rgba(255,255,255,.2);
    border-radius: 20px;
    option {
        color: #000;
    }
}

</style>