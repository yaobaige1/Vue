<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addToDo"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'MyHeader',
    props:['get_todo'],
    methods:{
        addToDo(e) {
            console.log(e.target.value);
            const todoObj = {id:nanoid(),title:e.target.value,done:false}
            // this.get_todo(todoObj)
            this.$emit('get_todo',todoObj)
            console.log(todoObj);
        }
    },

}
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>