<template>
  <div>
    <h2><School></School> <Student></Student></h2>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>