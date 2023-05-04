<template>
  我是{{ name }}<br>
  我已经 {{ age }} 岁  <br>
  <button @click="sayHello">点击我</button>
</template>

<script>

export default {
  name: 'App',
  setup() {
    let name = "张三"
    let age = 89

    function sayHello() {
      alert(`我是${name}，我已经 ${age} 岁了`)
    }

    return {
      name,
      age,
      sayHello
    }
  },
  components: {
  }
}
</script>

