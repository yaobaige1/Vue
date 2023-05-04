<template>
	姓：<input type="text" v-model="person.firstName">
	名：<input type="text" v-model="person.lastName">
	<h2>{{ person.fullName }}</h2>
	<input type="text" v-model="person.fullName">
	<hr>
	<slot name="newslot"></slot>
	<button @click="altitle">点我</button>
</template>

<script>
import {computed, reactive} from 'vue'
	export default {
		props:[],
		emits:['altitle'],
		setup(props,context) {
			let person = reactive({
				firstName:"李",
				lastName:"白"
			})
			function altitle() {
				context.emit("altitle",person.fullName)
			}
			person.fullName = computed({
				get() {
					return person.firstName + '-' + person.lastName
				},
				set(value) {
					const nameArr = value.split('-')
					person.firstName = nameArr[0]
					person.lastName = nameArr[1]
				}
			})
			return {
				person,
				altitle
			}
		}
			
		}

</script>

