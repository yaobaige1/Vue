<template>
  <div class="name">
    <h2>我是{{ name }}</h2>
    <button @click="getStudentName">我是子组件，我要给App传学生名字</button>
  </div>
</template>
 
<script>
export default {
    name:'Student',
    data(){
        return {
            name:'张三'
        }
    },
    methods:{
        getStudentName() {
            this.$emit('getStudentName',this.name)
        }
    }
}
</script>

<style scoped>
    .name {
        background-color: yellow;
    }
</style>