<template>
  <div>
    我是num1 {{ num }}
    <button @click="jiajia">++1</button>
  </div>
</template>

<script>
// import { hunhe1 } from "../mixin.js";
export default {
  name: "School",
  data() {
    return {
      num: this.numberr,
    };
  },
  props: ["numberr"],
  // mixins: [hunhe1],
  mounted() {
    // console.log("我是School");
  }
};
</script>

<style>
</style>