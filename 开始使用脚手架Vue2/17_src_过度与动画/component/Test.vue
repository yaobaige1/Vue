<template>
  <div>
        <transition name="donHua" appear>
            <h2 v-show="show" class="aaa">
                啊啊啊啊啊啊啊
            </h2>
        </transition>
        <button @click="show = !show">动画</button>
    </div>
</template>

<script >
export default {
    name:'Test',
    data() {
        return {
            show: true
        }
    },
}
</script>

<style scoped>
.aaa{
    background-color: aqua;
}
.donHua-enter-active {
    animation: yesa 0.5s linear;
}

.donHua-leave-active {
    animation: yesa 0.5s linear reverse;
}

@keyframes yesa {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}
</style>