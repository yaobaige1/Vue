<template>
  我是{{ name }}<br>
  我已经{{ age }} <br>
  <h2>{{ obj.class }}</h2>
  <h2>{{ obj.sex }}</h2>
  <button @click="checkInfo">修改信息</button>
  <button @click="checkObj">obj点击</button>
</template>

<script>
import {ref} from 'vue'
export default {
    name:'App',
    setup() {
        let name = ref("张三")
        let age = ref(18)
        let obj = ref({
            class:'666',
            sex:'男'
        })
        
        function checkInfo () {
            name.value = "李四"
            age.value = 99

        }

        function checkObj() {
            console.log(obj.value);
            obj.value.class = 777
            obj.value.sex = "人妖"
        }

        return {
            name,
            age,
            obj,
            checkInfo,
            checkObj
        }
    }
}
</script>

<style>

</style>