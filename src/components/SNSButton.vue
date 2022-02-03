<template>
    <div class="sns-btn">
        <a :href="url_instagram" class="flowbtn instagram-btn"><i class="fab fa-instagram"></i></a>
        <a :href="url_twitter" class="flowbtn twitter-btn"><i class="fab fa-twitter"></i></a>
        <a :href="mail_address" class="flowbtn mail-btn"><i class="far fa-envelope"></i></a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url_instagram: 'https://instagram.com/aizu_astro',
                url_twitter: 'https://twitter.com/aizu_astro',
                mail_address: 's1280167@u-aizu.ac.jp',
            };
        },
    };
</script>

<style scoped>

    /* ボタン全体の位置 */
    .sns-btn{
        position: fixed;
        top: 60%;
        right: 5%;
        display:flex;
        flex-direction: column;
        z-index: 3;
    }
    .flowbtn{
        border-radius:50%;
        position:relative;
        display:inline-block;
        width:50px;
        height:50px;
        font-size:30px;
        text-decoration:none;
        transition:.5s;
    }
    .flowbtn:hover{
        color:#fff!important;
    }
    .flowbtn i{
        position:absolute;
        top:50%;
        left:50%;
        -ms-transform:translate(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
        transform:translate(-50%,-50%);
    }
   /* Instagram */
    .flowbtn.instagram-btn {
        border:solid 2px #c6529a;
        color:#c6529a;
        background-color: #ffffff;
        font-size:35px;
    }
    /* Instagramマウスホバー時 */
    .flowbtn.instagram-btn:hover{
        border:solid 2px #ffffff;
        background:#c6529a;
    }
    /* Twitter */
    .flowbtn.twitter-btn{
        border:solid 2px #55acee;
        color:#55acee;
        background-color: #ffffff;
    }   
    /* Twitterマウスホバー時 */
    .flowbtn.twitter-btn:hover{
        border:solid 2px #ffffff;
        background:#55acee;
    }
    /* Mail */
    .flowbtn.mail-btn{
        border:solid 2px #f3981d;
        color:#f3981d;	
        background-color: #ffffff;
        font-size:28px;
    }
    /* Mailマウスホバー時 */
    .flowbtn.mail-btn:hover{
        border:solid 2px #ffffff;
        background:#f3981d;
    }

</style>