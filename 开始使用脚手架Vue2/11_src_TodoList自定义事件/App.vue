<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- <MyHeader :get_todo="get_todo"></MyHeader> -->
             <MyHeader @get_todo="get_todo"></MyHeader>
            <MyList :todos="todos" :get_id="get_id" :delted_id="delted_id" ></MyList>
            <MyFooter :todos="todos" @check_all_todo="check_all_todo" :clear_arr="clear_arr" ref="clear_arr"></MyFooter>
        </div>
    </div>
</template>

<script>
import MyList from './components/MyList.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'

export default {
    name: 'App',
    data() {
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods:{
        get_todo(todoObj){
            this.todos.unshift(todoObj)
            // console.log();
        },
        get_id(id) {
            this.todos.forEach(item => {
                if(item.id == id) item.done = !item.done
            });
        },
        delted_id(id) {
            this.todos = this.todos.filter(item=>{
                return item.id !== id
            })
        },
        check_all_todo(done) {
            this.todos.forEach((item)=>{
                item.done = done
            })
        },
        clear_arr(show) {
           this.todos = this.todos.filter(item=>{
            return !item.done 
           })
        }
    },
    watch:{
        todos:{
            deep:true,
            handler(value) {
                localStorage.setItem('todos',JSON.stringify(value))
            }
        }
    },
    mounted(){
        this.$refs.clear_arr.$on('clear_arr',this.clear_arr)
    },
    components: { MyList, MyHeader, MyFooter }
}
</script>

<style scoped>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}



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