import VueRouter  from "vue-router";
import ItemOne from '../pages/ItemOne'
const router = new VueRouter({
    routes:[
        {
            name:'ItemOneAbout',
            path:'/ItemOne',
            component:ItemOne
        }
    ]
})

router.beforeEach((to,from,next)=>{
    next()
})

export default router