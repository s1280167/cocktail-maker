<template>
    <transition name="fade" @after-enter="changeShow()" appear>
        <h1 v-show="show" class="main-title">Cocktail Maker</h1>
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
        top: 15%;
        left: 50%;
        height: 100%;
        width: 100%;
        background-color: #474a4d;
        transform: translate(-50%, -50%);
        font-size: 3.5vw;
        text-shadow: 0.25vw 0.25vw 0 #ffffff;
    }
    .fade-leave-active{
        transition: opacity 5s;
    }
    .fade-leave-to{
        opacity: 0;
    }
    .large{
        font-size: 200%;
    }
    .span1{
        font-size: 100%;
    }
</style>