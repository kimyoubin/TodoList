<template>
    <header>
        <div class="wrap">
            <div class="date">
                <div class="today">{{ $moment().format('[Today is] dddd') }}</div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
    padding: 40px 0 80px;
    .wrap {
        display: flex;
        justify-content: flex-end;
        padding: 0 30px;
    }
    .date {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }
}
</style>