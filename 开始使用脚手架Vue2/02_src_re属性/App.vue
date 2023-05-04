<template>
    <div>
        <h2 ref="hhh">我放弃了</h2>
        <button @click="baba">点我baba</button>
        <button @click="mama">点我mama</button>
        <School ref="xxx"></School>
    </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name:'App',
    data() {
        return {}
    },
    methods:{
        baba() {
            console.log(this.$refs.hhh);
        },
        mama() {
            // console.log(this.$refs.xxx);
            console.log("我是this",this);
        }
    },
    components:{
        School
    }
}
</script>

<style>

</style>