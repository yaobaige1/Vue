<template>
    <div class="row">
        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avater_url" style="width: 100px;" />
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
        <div v-show="info.isFirst">欢迎您的到来！</div>
        <div v-show="info.isLoading">Loading...</div>
        <div v-show="info.errMsg">{{ info.errMsg }}</div>
    </div>
</template>

<script>
export default { 
    name: 'List',
    data() {
        return {
            // users:[],
            info:{
                isFirst:true,
                isLoading:false,
                errMsg:'',
                users:[]
            }
        }
    },
    mounted() {
        this.$bus.$on('updateListData',(info) => {
            // console.log("我是users",info);
            // 后来者居上，来者不拒
            this.info = {...this.info,...info}
        })
    }
}
</script>

<style scoped>
.album {
    min-height: 50rem;
    /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>