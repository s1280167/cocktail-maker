<template>
    <div class="content1">
        <img class ="background-image1" src="../assets/yakei.jpeg">
        <MainTitle></MainTitle>
   </div>
</template>

<script>
    import MainTitle from "../components/MainTitle.vue";
    export default {
        components: {
            MainTitle,
        },
    };
</script>

<style>
    .background-image1 {
        width: 100%;
        height: auto;
    }
</style>