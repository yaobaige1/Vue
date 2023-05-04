<template>
  <div>
    <Student :numberr="1"></Student>
    <School :numberr="100"></School>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School, Student },
};
</script>

<style>
</style>