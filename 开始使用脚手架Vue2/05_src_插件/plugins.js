export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('mySlice', function (value, startLen = 0, endLen = 4) {
            return value.slice(startLen, endLen)
        })
        //自定义指令
        Vue.directive('fbind',{
            inserted(element,binding) {
                element.value = binding.value
                element.focus()
            }
        })
        Vue.directive('ten',{
            // 指令所在的模板被重置解析时
            inserted(element,binding) {
                console.log("aa");
                element.value = binding.value * 10
            }
        })

        // 方法或数据混入
        Vue.mixin({
            data() {
                return {
                    nian:1
                }
            }
        })
    }   

}