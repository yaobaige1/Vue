<template>
  <div class="abc">
    <div>{{name}}</div>
    <div class="dfg">{{age}}</div>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'李白',
            age:88
        }
    }
}
</script>

<style lang="less" acoped>
      .abc {
        background-color:gold;
        .dfg {
            font-size: 50px;
            background-color: aqua;
        }
    }
</style>
