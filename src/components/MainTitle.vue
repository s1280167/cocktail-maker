<template>
    <transition name="fade" @after-enter="changeShow()" appear>
        <h1 v-show="show" class="main-title">
            <span class="large">A</span>izu<br>
            <span class="large">A</span>stronomy<br>
            <span class="large">C</span>lub
        </h1>
    </transition>        
</template>

<script>
    export default {
        data() {
            return {
                show: true
            };
        },
        methods: {
            changeShow: function() {
                this.show = !this.show;
            },
        },
    };
</script>

<style scoped>
    .main-title{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3.5vw;
        text-shadow: 0.5vw 0.5vw 0 #121212;
    }
    .fade-enter-active{
        transition: opacity 3s;
    }
    .fade-leave-active{
        transition: opacity 5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .large{
        font-size: 200%;
    }
    .span1{
        font-size: 100%;
    }
</style>