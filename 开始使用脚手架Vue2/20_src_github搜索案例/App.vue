<template>
    <div id="app">
        <div class="container">
            <Search></Search>
            <List></List>
        </div>
    </div>
</template>

<script>
import Search from './compontent/Search.vue'
import List from './compontent/List.vue'
export default {
    name: 'App',
    components:{Search,List}
}
</script>

<style>

</style>