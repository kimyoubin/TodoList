<template>
    <select name="" id="">
        <option value="">Latest</option>
        <option value="">Oldest</option>
    </select>
</template>

<script>
export default {
    name: 'TodoSelect',

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