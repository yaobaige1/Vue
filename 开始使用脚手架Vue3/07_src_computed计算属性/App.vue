<template>
	<Demo @altitle="altitle">
		<template v-slot:newslot>
			<h1>啊啊啊</h1>
		</template>
	</Demo>
</template>

<script>
	import Demo from './components/Demo'
	export default {
		name: 'App',
		components:{Demo},
		setup(){
			function altitle(value) {
				alert(`我的名字是${value}`)
			}
			return {
				altitle
			}
		}
	}
</script>

