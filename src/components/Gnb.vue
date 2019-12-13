<template>
  <div class="wrap">
    <div class="gnb-wrap">
      <div class="gnb">
        <h1 class="logo">
          <router-link to="/">
            <img src="../assets/images/logo/logo_main.png" alt="">
          </router-link>
        </h1>
        <div class="menu" :class="{active:isActive}"> 
          <h1 class="logo is_mobile">
            <router-link to="/">
              <img src="../assets/images/logo/logo_menu.png" alt="">
            </router-link>
          </h1>
          <router-link to="/schedule" v-on:click="openMenu"> IR 일정</router-link>
          <router-link to="/announcement" >실적발표</router-link>
          <router-link to="/news" >IR News</router-link>
          <router-link to="/financial" >재무정보</router-link>
          <router-link to="/status" >주주현황</router-link>
          <router-link to="/disclosure" >공시</router-link>
          <router-link to="/report" >경영보고서</router-link>
          <router-link to="/contact" >IR Contact</router-link>
          <button tpye="button" class="close is_mobile" v-on:click="openMenu"></button>
        </div>
        <div class="app">
          <a href="#">
            <img src="../assets/images/icon/android.png" alt="">
          </a>
          <a href="#">
            <img src="../assets/images/icon/googlePlay.png" alt="">
          </a>
        <button type="butotn" class="btn-menu is-mobile" v-on:click="openMenu"></button>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data : () => {
      return {
        isActive : false,
      }
    },
    methods:{
      openMenu(){
        this.isActive = !this.isActive;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
  .gnb-wrap {
    position: absolute;
    left:0;
    top:36px;
    width:100%;
    padding:0 40px;
    z-index: 11;
    .gnb {
      @include contentWidth();
      display:flex;
      align-items: center;
      .logo {
        margin-right:auto;
      }
    }
    .menu {
      display:flex;
      a {
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
@media screen and (max-width: 1400px) {
  .gnb-wrap {
    .menu {
      a {
        & + a {
          margin-left:45px;
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
    .gnb-wrap {
      top:30px;
      padding:0 30px;
      .menu {
        display:flex;
        flex-direction: column;
        position:fixed;
        left:-100%;
        top:0;
        width:100%;
        height:100%;
        padding:26px 90px;
        justify-content: center;
        background-color:#fff;
        z-index: 300;
        transition:all .5s;
        &.active {
          left:0;
        }
        .logo {
          position:absolute;
          width:100%;
          top:28px;
          left:50%;
          transform: translateX(-50%);
          margin-right:0;
          a {
            display:block;
            width:100%;
            text-align: center;
          }
          img {
            width:auto;
            height:15px;
          }
        }
        a {
          color:#333;
          font-size:17px;
          text-align: center;
          & + a {
            padding-top:25px;
            margin-top:25px;
            border-top:1px solid #e4e4e4;
            margin-left:0;
          }
        }
        .close {
          position:absolute;
          right:30px;
          top:30px;
          width:20px;
          height:20px;
          @include bgImg(btn/btn_close_menu);
          background-color:transparent;
          background-size:cover;
        }
      }
      .app {
        width:auto;
        height:auto;
        border:none;
        .btn-menu {
          width:23px;
          height:19px;
          margin-left:22px;
          background-color: transparent;
          @include bgImg(btn/btn_m_menu);
          background-size:cover;
        }
        a {
          & + a {
            margin-left:25px;
          }
        }
      }
      .logo {
        img {
          height:19px;
        }
      }
    }
}
</style>
