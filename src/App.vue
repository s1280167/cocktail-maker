<template>
  <div class="contents">
    <Header></Header>
    <div class="main">
      <router-view></router-view>
    </div>
    <SNSButton></SNSButton>
    <Footer></Footer>      
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SNSButton from "./components/SNSButton.vue";
import Footer from "./components/Footer.vue";

  export default {
    components: {
      Header,
      SNSButton,
      Footer,
    }
  };

</script>

<style>
  .contents{
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .main{
      position: relative;
      top: 8%;
      width:100%;
      flex-direction: column;
      margin-bottom: 5%;
  }
  .title-link{
    color: #ffffff;
    font-size: 1.5vw;
    text-decoration: none;
  }
  .router-link{
    color: #ffffff;
    text-decoration: none;
  }    
</style>
