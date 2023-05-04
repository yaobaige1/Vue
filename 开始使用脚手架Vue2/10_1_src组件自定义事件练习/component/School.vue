<template>
    <div>
        <h2 class="name">{{ SchoolNmae }}</h2>
        <button @click="SchoolName"> 我是子组件，我要给App传学校名字</button>
        <button @click="JieChuBind"> 我是子组件，我要取消School的事件绑定</button>
    </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            SchoolNmae:'广东邮电',
            num:0
        }
    },
    methods:{
        SchoolName() {
            
            this.$emit('getSchoolName',this.SchoolNmae,this.num++)
        },
        JieChuBind() {
            this.$off('getSchoolName')  //解绑单个
            // this.$off()  //解绑多个
        }
    }
}
</script>

<style scoped>
    .name {
        background-color: aquamarine;
    }
</style>