<template>
  <div id="app">
    <template v-if="!isMobile">
      <NavigationBar />
    </template>
    <template v-else>
      <MobileNavigaterBar />
    </template>
    <div 
      :class="{'global-body': !isMobile, 'mobile-global-body': !isMobile && $route.fullPath !== 'join'}"
    >
      <router-view />
    </div>
    <template v-if="$route.fullPath !== 'join'">
      <footerBody />
    </template>
  </div>
</template>
<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'
import MobileNavigaterBar from '@/components/MobileNavigaterBar.vue'
import FooterBody from '@/components/FooterBody.vue'

export default {
  name: 'app',
  components: {
    NavigationBar,
    MobileNavigaterBar,
    FooterBody
  },
  data() {
      return {
        isMobile: false,
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
  },
  created() {
  },
  mounted() {
    const filter = 'win16|win32|win64|mac|macintel';
    const _web = filter.indexOf(navigator.platform.toLowerCase()) < 0 !== true;
    const _iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i) !== null;
    const _android = navigator.userAgent.match(/Android/i) !== null;

    if (_iOS || _android || ((_iOS || _android) && _web)) {
      this.isMobile = true;
    }
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean');
@import "@/style/_variables.scss";

* {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: inherit;
}
input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.global-body {
  margin-top: $global-margin-top;
}
.mobile-global-body {
  margin-top: $mobile-global-margin-top;
}
.flex-lefet-center {
  display: flex;
  justify-content: left;
  align-items: center;
}
.check-box-wrap {
    & label {
        display: flex;
        justify-content: left;
        align-items: center;

        & input {
            opacity: 0;
            position: absolute;
        }
        & .checkbox {
            flex-shrink: 0;
            flex-basis: 24px;
            width: 24px;
            height: 24px;
            border: 0.5px solid #D1D1D6;
            border-radius: 5px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.15s ease-in-out;
        }
        & input[type="checkbox"]:checked +  .checkbox {
            background: #E91E63;
            border-color: transparent;

            &:after {
                content: '';
                display: block;
                width: 10px;
                height: 10px;
                background: url('assets/img/join/ic_checked.png') center center no-repeat / contain;
            }
        }
        & .text {
            flex: 1;
            margin-left: 11px;
        }
    }
}
.check-box-wrap.size-lg {
    & .checkbox {
        flex-basis: 41px;
        width: 41px;
        height: 41px;
    }
    & input[type="checkbox"]:checked +  .checkbox {
        &:after {
            width: 21px;
            height: 21px;
        }
    }
}
.radio-wrap {
  width: 100%;
  & label {
  display: block;
  text-align: center;
    & input {
      opacity: 0;
      position: absolute;
    }
    .radio-box {
      background: #FFFFFF;
      border: 1px solid #D1D1D6;
      border-radius: 4px;
      padding: 12px;
    }
    & input[type="radio"]:checked +  .radio-box {
        background: #E91E63;
        color: #ffffff;
        border-color: transparent;
    }
  }
}
</style>
