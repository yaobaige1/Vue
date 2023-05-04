<template>
    <div>
 =      <Student></Student>
        <School></School>
    </div>
</template>

<script>
    import School from './School'
    import Student from './Student'

export default {
    name:'App',
    data() {
        return {
            
        }
    },
    comments:{
        Student,
        School
    }
}
</script>

<style>

</style>