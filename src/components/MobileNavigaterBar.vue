<template>
    <div class="MobileNavigaterBar">
      <header>
        <div class="header-logo">
          <img width="118px" :src="logo" />
        </div>

        <img 
          width="24px"
          src="../assets/img/ic_menu.png"
          class="header-menu"
          @click="headerMenuBtn()"
          />
          
          <div 
            v-if="isMenuShow"
            class="header-navigation"
          >
          <div class="mobile_back_view" v-if="isBackMobileView">
          </div>
            <ul>
              <li class="topheader">Investor Realations</li>
              <li v-for="item in v_list" v-bind:key="item.title" v-scroll-to="{el: '#'+item.c_name, container: 'body', duration: 500}" v-on:click="goMenuBtn(item.c_name)">
                <a>
                  {{ item.title }}
                </a>
              </li>
              <li v-on:click="headerMenuBtn()">
                <a>
                  <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                    <path fill="#C7C7CC" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
      </header>    
    </div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
    name: 'MobileNavigaterBar',
    components: {
    },
    data() {
        return {
          isMenuShow: false,
          logo: '',
          isBackMobileView: false,
          h_list: [
            {'title': '실적발표', 'isActive': true, 'color': '', 'c_name': 'Performance', 'isView': true}, 
            {'title': 'FAQ', 'isActive': false, 'color': '', 'c_name': 'FAQ', 'isView': false}, 
            {'title': 'IR News', 'isActive': false, 'color': '', 'c_name': 'IrNews', 'isView': true}, 
            {'title': '경영보고서', 'isActive': false, 'color': '', 'c_name': 'Report', 'isView': false}, 
            {'title': '재무정보', 'isActive': false, 'color': '', 'c_name': 'Finance', 'isView': true}, 
            {'title': '공시', 'isActive': false, 'color': '', 'c_name': 'Disclosure', 'isView': true}, 
            {'title': '주주현황', 'isActive': false, 'color': '', 'c_name': 'ShareHolder', 'isView': true}, 
            {'title': 'IR Contact', 'isActive': false, 'color': '', 'c_name': 'Contact', 'isView': true}
          ],
          v_list: []
        }
    },
    props: [
    ],
    filters: {
    },
    computed: {
      ...mapGetters(['getLogo', 'GETISVIEW', 'getIsIPO', 'getmReportlen', 'getQALEN'])
    },
    watch: {
      getLogo () {
        const _self = this
        _self.logo = 'http://file.irgo.co.kr/data/IRPAGE/IMG/'+_self.getLogo
      },
      getIsIPO () {
        const _self = this
        if (_self.getIsIPO == 'CT02') {
          _self.h_list[0].title = 'IPO정보'
          _self.h_list[0].c_name = 'IPO'
        }
      },
      getmReportlen () {
        const _self = this
        if (_self.getmReportlen > 0) {
          _self.h_list[3].isView = true
        }
        _self.v_list = _.filter(_self.h_list, ['isView', true])
      },
      getQALEN () {
        const _self = this
        if(_self.getQALEN > 0) {
          _self.h_list[1].isView = true
        }
        _self.v_list = _.filter(_self.h_list, ['isView', true])
      },
      GETISVIEW () {
        const _self = this
        for (let i = 0; i < _self.h_list.length; i++) {
          if (_self.GETISVIEW[0][_self.h_list[i].c_name] == 'N') {
            _self.h_list[i].isView = false
          }
        }
        _self.v_list = _.filter(_self.h_list, ['isView', true])
      },
    },
    methods: {
      headerMenuBtn() {
        this.isBackMobileView ? this.isBackMobileView = false : this.isBackMobileView = true
        this.isMenuShow ? this.isMenuShow = false : this.isMenuShow = true
      },
      goMenuBtn (cname) {
        this.isBackMobileView ? this.isBackMobileView = false : this.isBackMobileView = true
        this.isMenuShow ? this.isMenuShow = false : this.isMenuShow = true
        location.href="#"+cname
      }
    },
    created() {
    },
    mounted() {
    }
};
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.mobile_back_view {
  background: rgba(0,0,0,0.3);
  height: 100vh;
  width: 100vw;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  margin-top:7vh;
}
.MobileNavigaterBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #ffffff;
  z-index: 1500;
  border-bottom: 1px solid $border-color;

  .header-logo {
    height: 21px;
  }

  header {
    padding: 16px;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; 

    .header-menu {
      position: absolute;
      left: 16px;
      top: 50%;
      margin-top: -12px;
    }
  }
  .header-navigation {
    position: absolute;
    width: 100%;
    left: 0;
    top: 54px;
    text-align: left;
    background: white;
    padding: 0 40px;
    text-align: left;
    border-radius: 0px 0px 10px 10px / 0px 0px 10px 10px;

    & ul {
    }
    & li:first-child {
      font-size:13px;
      border-bottom: 1px solid #eaeaea!important;
      padding: 40px 0 8px 0!important;
    }
    & li:nth-child(2) {
      padding: 25px 0 8px 0;
    }
    & li:last-child {
      text-align:center;
      padding-top: 35px;
    }
    & li {
      list-style: none;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
      margin: 0 auto;

      &.active {
        & a {
          font-size: 18px;
          font-weight: normal;
        }
      }

      & a {
        font-weight: normal;
        color: black;
        font-size: 18px;
        cursor: pointer;
      }
      & a:hover {
        text-decoration: none;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
