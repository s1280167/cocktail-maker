<template>
    <div id="top">
        <h1>Cocktail Maker</h1>
        <span>
            飲んでなくない？ Wow Wow<br>
            a
        </span>
   </div>
</template>

<script>
    export default {
        components: {
        
        },
        data() {
            return {
                
            };
        },
    };
</script>

<style>
    #top{
        position: relative;
        top: 0;
        min-height: 81.75vh;
        padding: 10% 25% 0;
        background-image: linear-gradient(#e6f0f0, #c9ffbf, #ffafbd);
        background-size: cover;
    }

    /* ---------- モバイル ---------- */
    @media (max-width: 600px) {
        #top{
            padding: 45% 7.5% 0;
        }
    }
</style>