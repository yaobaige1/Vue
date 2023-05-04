<template>
  <div>
    {{ title }}
    <hr />
    <School name="李五" :age="21"></School>
  </div>
</template>

<script>
import School from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      title: "我是App主组件",
    };
  },
  components: {
    School,
  },
};
</script>

<style>
</style>