<template>
    <header>
        <h1 class="title-link"><router-link class="router-link" to="/">天文部</router-link></h1>
        <ul class="header-menu">
            <router-link class="router-link menu-content" to="/">トップ</router-link>
            <router-link class="router-link menu-content" to="/member">部員向け</router-link>
            <a class="router-link menu-content" :href="url_applicant">入部希望</a>
        </ul>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                
                url_applicant: 'https://docs.google.com/forms/d/1yEKQDrH2Rg3jT3xBfc6GRevokw228_ZYlrcY2LzV1sw/edit',
            };
        },
    }
</script>

<style>
    header{
        position: fixed;
        top: 0;
        padding: 0 5%;
        display: flex;
        align-items: center;
        width: 100%;
        height: 5%;
        background-color: #474a4d;
        border-bottom: 1px solid #ffffff;
        z-index: 5;
    }

    .header-menu{
        margin-left: 50vw;
        width: 30vw;
        font-size: 1vw;
    }
    .menu-content{
        padding: 10%;
    }
</style>
