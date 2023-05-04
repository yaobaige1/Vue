<template>
  <div>
    <h2>我是{{ name }}----我{{ age }}</h2>
    我翻<span v-ten= "age"></span>倍
    <hr>
    <button @click="age++">翻10倍</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 1,
    };
  },
};
</script>

<style>
</style>