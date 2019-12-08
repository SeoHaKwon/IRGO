<template>
  <div class="wrap">
    <div class="gnb-wrap">
      <div class="gnb">
        <h1 class="logo">
          <router-link to="/">
            <img src="../assets/images/logo/logo_main.png" alt="">
          </router-link>
        </h1>
        <router-link to="/schedule">IR 일정</router-link>
        <router-link to="/announcement">실적발표</router-link>
        <router-link to="/news">IR News</router-link>
        <router-link to="/financial">재무정보</router-link>
        <router-link to="/status">주주현황</router-link>
        <router-link to="/disclosure">공시</router-link>
        <router-link to="/report">경영보고서</router-link>
        <router-link to="/contact">IR Contact</router-link>
        <div class="app">
          <a href="#">
            <img src="../assets/images/icon/android.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/images/icon/googlePlay.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "@/style/_mixin.scss";
  .gnb-wrap {
    position: absolute;
    left:0;
    top:36px;
    width:100%;
    z-index: 10;
    .gnb {
      @include contentWidth();
      display:flex;
      align-items: center;
      .logo {
        margin-right:auto;
      }
      >a {
        font-size:17px;
        color:$white;
        font-weight: 700;
        &+ a {
          margin-left:54px;
        }
      }
    }
    .app {
      display:flex;
      align-items: center;
      justify-content: center;
      width:146px;
      height:50px;
      margin-left:64px;
      border:3px solid rgba(247, 247, 247, 0.3);
      a + a {
        margin-left:37px;
      }
    }
  }

</style>
