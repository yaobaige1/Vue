<template>
    <div>
        <input type="text" v-fbind:value = "text">
        <h2>{{name | mySlice}}</h2>
    </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'广东邮电职业技术学院',
            text:"文本"
        }
    }
}
</script>

<style>

</style>