<template>
  <div>
    <School></School>
    <Student/>
  </div>
</template>

<script>
import School from './component/School.vue'
import Student from './component/Student.vue'
export default {
    name:'App',
    components:{School,Student}
}
</script>

<style>

</style>