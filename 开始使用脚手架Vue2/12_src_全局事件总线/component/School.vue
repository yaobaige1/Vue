<template>
    <div>
        <h2>{{ SchoolName }}</h2>
        我是学校的学生--{{ StudentName }}
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            SchoolName: '广东邮电',
            StudentName: ''
        }
    },
    methods: {
        getStudentName(name) {
            this.StudentName = name
        }
    },
    mounted() {
        this.$bus.$on('getStudentName', this.getStudentName)
    }
}
</script>

<style></style>