<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="aaa"/>
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearArr">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    data() {
        return {

        }
    },
    computed:{
        doneTotal() {
            return this.todos.reduce((pre,current)=> pre + (current.done ? 1:0),0)
        },
        total() {
            return this.todos.length
        },
        aaa:{
            get(){
                return this.doneTotal === this.total && this.total > 0 
            },
            set(value) {
                // this.check_all_todo(value)
                this.$emit('check_all_todo',value)
            }
        },
    
    },
    methods:{
        clearArr() {
            // this.clear_arr()
            this.$emit('clear_arr')
          
        }
    },
    props:['todos']
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>