<template>
    <div>
        <ul class="todo-main">
            <MyItem v-for="(todoObj) in todos" :key="todoObj.id" :todoObj="todoObj" :get_id="get_id" :delted_id="delted_id"></MyItem>
        </ul>
    </div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name: 'MyList',
    props:['todos','get_id','delted_id'],
    components: { MyItem },
    mounted() {
        console.log(this.todos);
    },
    methods:{
        addtodo() {
            
        }
    }
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>