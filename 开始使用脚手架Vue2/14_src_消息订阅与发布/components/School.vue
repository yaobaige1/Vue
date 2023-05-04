<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<h2>我是学生{{ StudentName }}</h2>
		<button @click="sendSchoolName">把学校名给App</button>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'School',
		props:['getSchoolName'],
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
				StudentName:''
			}
		},
		methods: {
			sendSchoolName(){
				this.getSchoolName(this.name)
			}
		},
		mounted() {
			pubsub.subscribe('hello',(a,b)=>{
				console.log("我是"+ a,b);
				this.StudentName = b
			})
		}
		
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>