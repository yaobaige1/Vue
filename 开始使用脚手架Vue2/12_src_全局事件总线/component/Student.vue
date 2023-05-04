<template>
    <div>
        <h2>{{ StudentName }}</h2>
         <button @click="sendName">发送学生名字给学校</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            StudentName: '张三'
        }
    },
    methods:{
        sendName() {
            this.$bus.$emit('getStudentName',this.StudentName)
        }
    }

}
</script>

<style></style>