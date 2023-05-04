//该文件用于创建Vuex中最核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// Count页面计算类
const countAbout = {
    namespaced: true,  //开启命名空间
    actions: {
        JIA1DD(content, value) {
            if (content.state.sum % 2) {
                content.commit('JIA', value)
            }
            // console.log("我是JIA1DD",content);
        },
        JIATIME(content, value) {
            setTimeout(() => {
                content.commit('JIA', value)
            }, 2000);
        }
    },
    mutations: {
        JIA(state, value) {
            console.log("我是mutations", state, value);
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        student: '张三',
        school: '邮电',
    }
}

//Person 名字添加页面
const personAbout = {
    namespaced: true,
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.unshift(value)
        }
    },
    state: {
        persons: [{ id: 1, name: '张三' }]
    },
    getters: {
        bigdd(state) {
            // return state.sum * 10
            return countAbout.state.sum * 10
        }
    }
}

//准备actions 用于响应组件中的动作
// const actions = {

// JIA1DD(content,value) {
//     if(content.state.sum % 2) {
//         content.commit('JIA',value)
//     }
//     // console.log("我是JIA1DD",content);
// },
// JIATIME(content,value) {
//     setTimeout(() => {
//         content.commit('JIA',value)
//     }, 2000);
// }
// }
//准备mutations 用于操作数据(state)
// const mutations = {
//     JIA(state,value) {
//         console.log("我是mutations",state,value);
//         state.sum += value
//     },
//     JIAN(state,value) {
//         state.sum -= value
//     },
//     ADD_PERSON(state,value) {
//         state.persons.unshift(value)
//     }

// }
//准备state 用于存储数据
// const state = {
// sum:0,
// student:'张三',
// school:'邮电',
// persons: [{ id: 1, name: '张三' }]
// }
// 用于自动计算
// const getters = {
//     bigdd(state) {
//         return state.sum * 10
//     }
// }

//创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout,
        personAbout,
    }

})
