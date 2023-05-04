<template>
  <div>
    我是num2 {{ num }}
    <button @click="jiajia">++1</button>
  </div>
</template>

<script>
// import { hunhe1 } from "../mixin.js";
export default {
  name: "Student",
  data() {
    return {
      num: this.numberr,
    };
  },
  props: ["numberr"],
    // mixins: [hunhe1],
};
</script>

<style>
</style>