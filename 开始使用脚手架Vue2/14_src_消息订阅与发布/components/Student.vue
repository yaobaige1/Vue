<template>
	<div class="student">
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<h2>当前求和为：{{ number }}</h2>
		<button @click="sendStudentlName">把学生名给App</button>
	</div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
	name: 'Student',
	data() {
		return {
			name: '张三',
			sex: '男',
			number: 0
		}
	},
	methods: {
		sendStudentlName() {
			this.pubID = pubsub.publish('hello', this.name)
		}

	},
	beforeDestroy() {
		pubsub.undefined(this.pubID)
	}
}
</script>

<style lang="less" scoped>
.student {
	background-color: pink;
	padding: 5px;
	margin-top: 30px;
}
</style>
