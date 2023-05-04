<template>
    <li>
        <label>
            <input type="checkbox" :checked="todoObj.done" @change="getID(todoObj.id)"/>
            <span>{{ todoObj.title }}</span>
        </label>
        <button class="btn btn-danger" @click="deleteTodo(todoObj.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props:['todoObj','get_id','delted_id'],
    methods:{
        getID(id) {
            console.log(id);
            this.get_id(id)
        },
        deleteTodo(id) {
            console.log(id);
            this.delted_id(id)
        }
    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li:hover {
    background-color: #efefef;
}
li:hover button {
    display: block;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}


li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>