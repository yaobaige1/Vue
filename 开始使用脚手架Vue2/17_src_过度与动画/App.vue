<template>
    <div>

        <Test></Test>
        <hr>
        <Test2></Test2>
        <hr>
        <Test3></Test3>
    </div>
</template>

<script>
import Test from './component/Test.vue'
import Test2 from './component/Test2.vue'
import Test3 from './component/Test3.vue'
export default {
    name: 'App',
    data() {
        return {
            show: true
        }
    },
    components: {Test,Test2,Test3},
}
</script>
<style>

</style>