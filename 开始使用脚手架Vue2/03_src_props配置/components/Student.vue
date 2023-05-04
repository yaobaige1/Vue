<template>
  <div>
    <div>我是{{ name }}---我的年龄{{ age }}</div>
    <button @click="aaa">年龄++</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: this.name,
      age: this.age,
    };
  },
  methods: {
    aaa() {
      this.age++;
    },
  },
  // 简单声明接受 只接收
  // props:["name","age"]

  // 二代声明接受 （限制类型）：
  // props:{
  //     name:String,
  //     age:Number
  // }

  // 三代声明接受  (限制类型、限制必要性、
  //               指定默认值)
  props: {
    name: {
      type: String, //类型
      required: true, //必要性 如果值为空，会报错
    },

    // 备注：props只读的，Vue底层会检测你对props的修改，如果进行了修改，就会发出警告，
    //       若业务需要确实要修改，那么请复制props的内容到data中一份，
    //       然后去修改data中的数据

    age: {
      type: Number,
      default: 88,
    },
  },
};
</script>

<style>
</style>