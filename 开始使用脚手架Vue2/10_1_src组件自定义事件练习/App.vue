<template>
  <div>
    <h1 class="name">我是APP的学生名字{{ StudentName }}</h1>
    <h1 class="name">我是APP的学校名字{{ SchoolName }}--我是数字{{ num }}</h1>
    <School ref="getSchoolName"></School>
    <Student @getStudentName="getStudentName"></Student>

  </div>
</template>

<script>
import School from './component/School.vue'
import Student from './component/Student.vue'
export default {
    name:'App',
    data(){
        return {
            StudentName:'',
            SchoolName:'',
            num:0
        }
    },
    components:{ School,Student },
    methods:{
         getStudentName(StudentName) {
            console.log("我是StudentName");
            this.StudentName = StudentName
            console.log(StudentName);
            
         },
         getSchoolName(SchoolNmae,num) {
                this.SchoolName = SchoolNmae
                console.log("我是SchoolNmae");
                console.log(SchoolNmae);
                this.num = num
                console.log(num);
                
         }
    },
    mounted() {
        this.$refs.getSchoolName.$on('getSchoolName',this.getSchoolName)  //多次
        // this.$refs.getSchoolName.$once('getSchoolName',this.getSchoolName)  //仅能点击一次
    }
}
</script>

<style scoped> 
    .name {
        background-color: aqua;
    }
</style>