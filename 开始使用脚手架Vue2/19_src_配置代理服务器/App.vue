<template>
    <div>
        <div v-for="(item, index) in List" :key="index">
            {{ item.name }} --- {{ item.age }}
        </div>
        <button @click="getStudent">请求</button>
        <hr>
        <div v-for="(item, index) in carList" :key="index">
            {{ item.name }} --- {{ item.price }}
        </div>
        
         <button @click="getCar">获取车</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    data() {
        return {
            List:[],
            carList:[]
        }
    },
    methods: {
        getStudent() {
            axios.get('http://localhost:8080/api1/students')
                .then(response => {
                    console.log('请求成功了',response);
                    this.List = response.data
                    
                },
                    error => {
                    console.log('请求失败了',error);
                    })
        },
        getCar() {
            axios.get('http://localhost:8080/api2/cars')
            .then(response=>{
                console.log("请求车成功了",response);
                this.carList = response.data
            },
            error=>{
                console.log("请求车失败了",error);
            })
        }
    }

}
</script>

<style></style>