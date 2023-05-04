<template>
    <div>
      <input type="text" placeholder="请输入添加的人" v-model="person.name">
      <button @click="add_person(person)">提交</button>
      <ul>
        <li v-for="(person, index) in persons" :key="index">
            {{ person.id }} --------- {{ person.name }} 
        </li>
      </ul>
      <h2>我们有{{ money }}元</h2>
    </div>
    
  </template>
  
  <script>
  import { nanoid } from 'nanoid'
  import { mapState,mapMutations } from 'vuex'
 
//   import {} from 'vuex'
  export default {
      name:'Person',
      data() {
        return {
            person:{
                id:nanoid(),
                name:''
            }
        }
      },
      methods:{
        // add_person() {
        //     this.$store.commit('ADD_PERSON',this.person)
        // }
        ...mapMutations('personAbout',{add_person:'ADD_PERSON'})
      },
      computed:{
        // persons() {
        //     return this.$store.state.persons
        // },
        // money() {
        //     return this.$store.state.sum
        // }
        ...mapState('personAbout',{persons:'persons'}),
        ...mapState('countAbout',{money:'sum'})
      }
  }
  </script>
  
  <style>
  
  </style>