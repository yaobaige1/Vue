<template>
    <div>
        <h2>我是数字{{ sum }}</h2>
        <h2>我是10倍后的sun {{ bigdd }}</h2>
        <h2>我有{{ persons.length }}人</h2>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select><br>
        <button @click="increment(num)">加佳佳</button><br>
        <button @click="decrement(num)">贱贱建</button><br>
        <button @click="increment0dd(num)">和为鸡数再加加加</button><br>
        <button @click="incrementWait(num)">延迟加</button><br>
        <hr>
        <div>我是{{ student }}---毕业{{ school }}</div>

    </div>
</template>

<script>
import { mapState,mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            num: 1,
            number: 0
        }
    },
    methods: {
        // 原始形态
        // increment() {
        //     // this.number += this.num
        //     this.$store.commit('JIA',this.num)

            // thus.$store.dispatch('countAbout/increment',this.num)
        // },

        // decrement() {
        //     // this.number -= this.num
        //     this.$store.commit('JIAN',this.num)
        // },


        // 借助mapMutations生成;increment、decrement (对象形式)
        //   html结构的激发函数体必须携带传输的参数
        ...mapMutations('countAbout',{ increment: 'JIA', decrement: 'JIAN' }),
        // ...mapMutations()
        // ...mapMutations(['increment','decrement'])


        // 原始形态
        // increment0dd() {
        //     // 外置
        //     // if(this.number % 2) {
        //     //     this.number += this.num
        //     // } 

        //     // 内置
        //     this.$store.dispatch('JIA1DD',this.num)
        // }, 
        // incrementWait() {
        //     // 外置
        //     // setTimeout(() => {
        //     //     this.number += this.num
        //     // }, 1000);


        //     // 内置
        //     this.$store.dispatch('JIATIME',this.num)
            // this.$rtore.dispatch('countAbout/JIATIEM',this.num)
        // },

        // 靠mapMutations 生成：increment1dd、decrement (对象形式) 
        //   html结构的激发函数体必须携带传输的参数
        ...mapActions('countAbout',{ increment0dd: 'JIA1DD', incrementWait: 'JIATIME' })
        // ...mapActions(['increment0dd','increment0dd'])

    },
    computed: {
        // 原始形态
        // sun() {
        //     return this.$store.state.sun
        // },
        // student() {
        //     return this.$store.state.student
        // },
        // school() {
        //     return this.$store.state.school
        // }

        // 借助mapState生成计算属性：num、school、student （对象法）
        // ...mapState({num:'num',student:'student',school:'schhol'}),
        // 借助mapState生成计算属性：sun、school、subject、（数组写法）
        ...mapState('countAbout',['sum', 'student', 'school']),
        ...mapState('personAbout',['persons']),

        bigdd() {
            return this.$store.getters['personAbout/bigdd']
        }
        // 借助mapGetters生成计算属性：bigdd（对象法）
        // ...mapGetters({bigdd:'bigdd'})
        // 借助mapGetters生成计算属性：bigdd（数组法）
        // ...mapGetters('countAbout',['bigdd'])
        
    },

    mounted() {
        console.log("我是state",this);
    }

}
</script>

<style></style>