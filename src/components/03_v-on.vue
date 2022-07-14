<template>
<div>
    <p>你要购买商品的数量: {{ count }}</p>
    <button v-on:click="count = count + 1">+1</button>
    <button v-on:click="addFn">+1</button>
    <button v-on:click="addCountFn(5)">+5</button>
    <button @click="subFn">减少1</button>
</div>
</template>

<script>
export default {
    methods: {
        addFn() {
            this.count++
        },
        addCountFn(num) {
            this.count += num
        },
        subFn() {
            this.count--
        }
    }
}
</script>