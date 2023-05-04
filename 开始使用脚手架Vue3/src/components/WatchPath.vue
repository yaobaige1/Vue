<template>
    <h2>{{ num }}</h2>
    <h2>我是10倍：{{ bigNum }}</h2>
    <h3>我是监视{{ sum }}</h3>
    <button @click="num++">++1</button>
    <hr>
    <h3>我是{{ aa }}</h3>
</template>
  
<script>
import { ref, watch, computed, reactive, watchEffect, toRef } from 'vue'
import { CLOSING } from 'ws'
export default {
    name: 'WatchPage',
    setup() {
        let num = ref(1)
        let sum = ref(0)
        let person = {
            name: '李白',
            age: 11,
            obj: {
                obj1: {
                    class: '板砖'
                },
                obj2: {
                    class: "打飞机"
                }
            }
        }
        let bigNum = computed(() => {
            return num.value * 10
        })
        console.log(bigNum);

        let aa =  toRef(person,'name')
        console.log("我是aa",aa);

        // 情况一：监视ref所定义的一个响应式数据
        // watch(num,(newValue,oldValue) => {
        //     console.log(newValue,oldValue);
        // },{immediate:true})

        // 情况二：监视ref所定义的多个响应式数据
        // watch([num,bigNum],(newValue,oldValue) => {
        //     console.log(newValue,oldValue);
        // },{immediate:true})

        // 情况三：监视reactives所定义的一个响应式数据的全部属性
        // 1.此处无法正确获取oldValue
        // 2.强制开启deep深度监视无效
        // watch(person,(newValue,oldValue)=>{
        //     console.log('person发送变化',newValue,oldValue);
        // },{deep:false})  //此处的deep配置无效

        // 情况四：监视reactive所定义的一个响应式数据中的某个属性
        // watch(()=>person.name,(newValue,oldValue)=>{
        //     console.log('person的name变化了',newValue,oldValue);
        // })

        // 情况五：监视reactive所定义的一个响应式数据中的某些属性
        // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
        //     console.log('person的name变化了',newValue,oldValue);
        // })

        // 特殊情况
        // watch(()=>person.obj,(newValue,oldValue)=>{
        //     console.log('person的name变化了',newValue,oldValue);
        // }{deep:true}) 
        //此处由于监视的是reactive元素定义的对象中的摸个对象，所以deep配置有效
        
        watchEffect(()=>{
            sum.value = num.value
            console.log("我是sum",sum.value);
        })

        return {
            num,
            sum,
            bigNum,
            person,
            aa
        }
    }

}
</script>
  
<style></style>