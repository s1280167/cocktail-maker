<template>
    <div class="member">
        <h1>部員向けページ</h1>
        <a class="schedule" :href="schedule">年間スケジュール</a>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                schedule: 'https://calendar.google.com/calendar/embed?src=ev85l6ob76a2lrb1s68tasrmuk%40group.calendar.google.com&ctz=Asia%2FTokyo',
            };
        },
    };
</script>

<style scoped>
    h1{
        margin-left: 10%;
        font-size: 5vh;
    }
    .member{
        position: relative;
        top: 1.5vh;
        width: auto;        
        height: 100vh;
        flex-direction: column;
        padding: 5vh;
        color: #f3981d;
        background-color: #117799;    
    }
    .schedule{
        color: #f3981d;
        text-decoration: none;
        font-size: 2.5vh;
    }
</style>