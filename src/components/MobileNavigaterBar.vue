<template>
  <div class="MobileNavigaterBar">
    <header>
      <div class="header-logo">
        <img width="155px" src="../assets/img/img_header_logo.png" />
      </div>
      <div class="header-navigation-box">
        <div class="header-mobile-icon">
          <a href="javascript: void(0)">
            <img width="20px" src="../assets/img/ic_android.png" />  
          </a>
          <a href="javascript: void(0)">
            <img width="20px" src="../assets/img/ic_google_play.png" />
          </a>
          <a href="javascript: void(0)">
            <img 
              width="25px" 
              src="../assets/img/ic_mogile_menu.png"
              @click="headerMenuBtn(true)"
              />
          </a>
        </div>
      </div>
    </header>
    <div 
      v-if="isMenuShow"
      class="header-navigation"
    >
      <img
        class="close" width="30px" src="../assets/img/ic_mobile_navi_close.png"
        @click="headerMenuBtn(false)"
       />
      <div class="header-logo">
        <img width="155px" src="../assets/img/img_header_logo.png" />
      </div>
      <ul>
        <li>
          <a href="javascript: void(0)">
            실적발표
          </a>
        </li>
        <li>
          <a href="javascript: void(0)">
            IR뉴스
          </a>
        </li>
        <li>
          <a href="javascript: void(0)">
            경영보고
          </a>
        </li>
        <li>
          <a href="javascript: void(0)">
            재무재표
          </a>
        </li>
        <li>
          <a href="javascript: void(0)">
            주주현황
          </a>
        </li>
        <li>
          <a href="javascript: void(0)">
            CONTANT
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
    name: 'MobileNavigaterBar',
    components: {
    },
    data() {
        return {
          isMenuShow: false,
        };
    },
    props: [
    ],
    filters: {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      headerMenuBtn(isOpen) {
        this.isMenuShow = isOpen;
      }
    },
    created() {
    },
    mounted() {
    },
};
</script>
<style lang="scss">
@import "@/style/_variables.scss";

.MobileNavigaterBar {
  position: fixed;
  top: 0;
  lef: 0;
  width: 100%;
  background: #ffffff;
  z-index: 1500;

  header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-navigation-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .header-mobile-icon {
      line-height: 0;

      & img:first-child  {
        margin-left: 30px;
      }
    }
  }
  .header-navigation {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    top: 0;
    z-index: 5000;
    padding: 30px;
    text-align: center;

    .close {
      position: absolute;
      right: 30px;
      top: 30px;
    }


    & ul {
      margin-top: 60px;
    }
    & li {
      list-style: none;
      padding: 20px 0;
      border-bottom: 1px solid #E6E6E6;
      margin: 0 auto;
      width: 60%;

      & a {
        color: #444;
        text-decoration: none;
        font-weight: bold;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
