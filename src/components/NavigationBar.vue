<template>
  <div class="NavigationBar">
    <header>
      <div class="header-logo">
        <img width="155px" :src="logo" />
      </div>
      <div class="header-navigation-box">
        <ul class="header-navigation">
          <li v-for="(item, idx) in h_list" :class="{active: item.isActive}" v-on:click="moveCategory(idx)">
            <a href="javascript: void(0)">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
      <div class="header-mobile-icon">

        <router-link to="/join">
          <div class="app-join" :style="{ 'background-color': mcolor }">
            앱 다운로드
          </div>
        </router-link>
      </div>
    </header>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      mcolor: '',
      logo: '',
      h_list: [
        {'title': '실적발표', 'isActive': true}, 
        {'title': 'IRNews', 'isActive': false}, 
        {'title': '경영보고서', 'isActive': false}, 
        {'title': '재무정보', 'isActive': false}, 
        {'title': '공시', 'isActive': false}, 
        {'title': '주주현황', 'isActive': false}, 
        {'title': 'IR Contact', 'isActive': false}
      ],
      ori_Active: 0
    }
  },
  methods: {
    moveCategory (idx) {
      const _self = this
      _self.h_list[_self.ori_Active].isActive = false
      console.log(idx)
      _self.h_list[idx].isActive = true
      _self.ori_Active = idx
    }
  },
  computed: {
    ...mapGetters(['getMainColor', 'getLogo'])
  },
  watch: {
    getMainColor () {
      const _self = this
      _self.mcolor = '#'+_self.getMainColor
    },
    getLogo () {
      const _self = this
      _self.logo = 'http://file.irgo.co.kr/data/IRPAGE/IMG/'+_self.getLogo
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";

.NavigationBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: 1500;
  border-bottom: 1px solid $border-color;

  header {
    width: 1150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-logo {
      flex-basis: 155px;
    }

    .header-navigation-box {
      flex-basis: calc(100% - 155px);
      padding-left: 10%;
      display: flex;
      justify-content: left;
      align-items: center;
    }

    .header-navigation {
      display: flex;
      justify-content: left;
      align-items: center;
      margin-bottom: 0px;

      & li {
        list-style: none;
        padding: 26px 0 22px 0;
        margin: 0 13px;
        border-bottom: 4px solid transparent;

        &.active {
          // border-bottom: 4px solid $brand-color;
          & a {
            color: $brand-color;
            font-weight:600;
          }
        }

        & a {
          font-size: 16px;
          text-align: center;
          color: #545454;
          text-decoration: none;
        }
      }
    }
    .app-join {
      border-radius: 4px;
      width: 140px;
      text-decoration: none;
      text-align: center;
      color: #fff;
      font-size: 14px;
      padding: 5px 20px;
    }
  }
  @media (min-width: 900px) and (max-width: 1149px) {
    header {
      width: 900px;

      .header-navigation {
        display: flex;
        justify-content: left;
        align-items: center;

        & li {
          list-style: none;
          padding: 26px 0;
          margin: 0 13px;

          & a {
            font-size: 13px;
            text-align: center;
            color: #545454;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
