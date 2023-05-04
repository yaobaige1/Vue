<template>
    <div>
        <h2>我是数字{{ number }}</h2>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select><br>
        <button @click="increment">加佳佳</button><br>
        <button @click="decrement">贱贱建</button><br>
        <button @click="increment0dd">和为鸡数再加加加</button><br>
        <button @click="incrementWait">延迟加</button><br>
    </div>
</template>

<script>
export default {
    name:'Count',
    data() {
        return {
            num:1,
            number:0
        }
    },
    methods:{
        increment() {
            this.number += this.num
        },
        decrement() {
            this.number -= this.num
        },
        increment0dd() {
            if(this.number % 2) {
                this.number += this.num
            }
        }, 
        incrementWait() {
            setTimeout(() => {
                this.number += this.num
            }, 1000);
        }
    }
}
</script>

<style>

</style>