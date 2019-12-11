<template>
  <div class="home">
    <!-- 메인 -->
    <HomeMainVisual id="main"/>

    <!-- 스케줄 -->
    <HomeSchedule id="schedule"/>

    <!-- 실적발표 -->
    <HomePerformance id="performance"/>
    
    <!-- IPO -->
    <HomeIPO id="ipo"/>

    <!-- FAQ -->
    <PerformanceFAQ />

    <PerformanceFAQTypeB />

    <!-- IR 뉴스 -->
    <HomeIrNews id="news"/>

    <!-- 경영 보고서 -->
    <HomeManagementReport id="report"/>

    <!-- 재무 정보 -->
    <HomeFinanceInfo id="finance"/>

    <!-- 공시 -->
    <HomeDisclosure id="disclosure"/>

    <!-- 주주 현황 -->
    <HomeShareholderStatus id="share"/>

    <!-- IR CONTANT -->
    <HomeIRContact id="contact"/>

    <!-- APP BANNER -->
    <HomeAppBanner id="banner"/>
  </div>
</template>

<script>
import HomeMainVisual from '@/components/HomeMainVisual.vue'
// import HomeMainInformation from '@/components/HomeMainInformation.vue'
import HomeSchedule from '@/components/HomeSchedule.vue'
import HomePerformance from '@/components/HomePerformance.vue'
import HomeIrNews from '@/components/HomeIrNews.vue'
import HomeManagementReport from '@/components/HomeManagementReport.vue'
import HomeFinanceInfo from '@/components/HomeFinanceInfo.vue'
import HomeDisclosure from '@/components/HomeDisclosure.vue'
import HomeIPO from '@/components/HomeIPO.vue'
import HomeShareholderStatus from '@/components/HomeShareholderStatus.vue'
import HomeIRContact from '@/components/HomeIRContact.vue'
import HomeAppBanner from '@/components/HomeAppBanner.vue'
import PerformanceFAQ from '@/components/PerformanceFAQ.vue'
import PerformanceFAQTypeB from '@/components/PerformanceFAQTypeB.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data: () => {
    return {
      isIPO: ''
    }
  },
  components: {
    HomeMainVisual,
    // HomeMainInformation,
    HomeSchedule,
    HomePerformance,
    HomeIrNews,
    HomeManagementReport,
    HomeFinanceInfo,
    HomeDisclosure,
    HomeIPO,
    HomeShareholderStatus,
    HomeIRContact,
    HomeAppBanner,
    PerformanceFAQ,
    PerformanceFAQTypeB
  },
  computed: {
    ...mapGetters(['getIsIPO'])
  },
  watch: {
    getIsIPO () {}
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.contaner {
  width: 1150px;
  margin: 0 auto;
}
.performance-group-tab {
    display: none;
}
#app > div.global-body, div.mobile-global-body > div > div.HomeIRContact.contaner > h3 {
  font-family: 'Noto Sans KR', sans-serif;
}

#app > div.global-body, div.mobile-global-body > div > div.HomeIRContact.contaner > h2 {
  font-family: 'Roboto', sans-serif;
}
.IR-main-description {
  font-size: 16px;
}

.section-sube {
  line-height: 1.5;
}

.home-more-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;

  & button {
      display: flex;
      justify-content: center;
      align-items: center;
      appearance: none;
      padding: 15px;
      text-align: center;
      width: 200px;

      background: #FFFFFF;
      border: 1px solid $border-color;
      border-radius: 4px;
      & h6 {
        font-size: 16px;
        color: #8E8E93;
        font-weight: 400;
        margin-bottom: 0;
      }

      & img {
        margin-left: 5px;
    }
  }

  &.top-btn {
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: 0;
    transform: translate(0, -50%);
  }
}

.select-warp {
    width: 200px;
    position: relative;
    font-family: 'Roboto', sans-serif;

    & select {
        background: #ffffff;
        border-radius: 4px;
        padding: 10px 20px;
        font-weight: bold;
        font-size: 21px;
        align-items: center;
        color: #545454;
        -webkit-appearance: none;
        -moz-appearance:none;
        appearance:none;
        width: 100%;
        position: relative;
        border-width: 1px;
        border-color: rgb(169, 169, 169);

        & option {
          font-family: 'Roboto', sans-serif;
          font-weight: 500;
        }
    }

    .select-arrow {
        transform: rotate(180deg);
        position: absolute;
        right: 20px;
        top: 50%;
        margin-top: -12px;
        z-index: 2;
    }
}

select::-ms-expand {
  display:none;
}
.section-title {
  padding-top: 36px;
  font-weight: bold;
  font-size: 46px;
  color: $font-color-base;
  position: relative;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;

  &::after {
    width: 20000px;
    height: 2px;
    background: $font-color-base;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: '';
  }
}

.section-title-roboto {
  padding-top: 36px;
  font-weight: bold;
  font-size: 46px;
  color: $font-color-base;
  position: relative;
  font-family: 'Roboto', sans-serif;

  &::after {
    width: 20000px;
    height: 2px;
    background: $font-color-base;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: '';
  }
}

.section-sube {
  font-size: 16px;
  color: #8E8E93;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
}

@media (min-width: 900px) and (max-width: 1149px) {
  .contaner {
    width: 900px !important;
  }
}
@media ( max-width: 899px ) {
  .contaner {
    width: 100%;
  }
  .HomeAppBanner {
    display: none;
  }

  .section-title {
      padding: 0 16px;
    font-weight: bold;
    font-size: 32px;
    color: $font-color-base;
    position: relative;

    &::after {
      display: none;
    }
  }

  .section-title-roboto {
      padding: 0 16px;
    font-weight: bold;
    font-size: 32px;
    color: $font-color-base;
    position: relative;

    &::after {
      display: none;
    }
  }

  .section-sube {
  padding: 0 16px;
    font-size: 16px;
    color: #8E8E93;
  }

  .home-more-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        padding: 15px;
        text-align: center;
        width: 200px;
        background: transparent;
        border: 0;
        border-radius: 4px;
        & h6 {
          font-size: 12px;
          color: #8E8E93;
          font-weight: 400;
        }

        & img {
          margin-left: 5px;
          width: 10px !important;
      }
    }
  }
  .performance-group-tab {
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 50px 16px 1rem 16px;
      border-bottom: 1px solid #E5E5EA;

      li {
          flex-basis: calc(20% - 11px);
          font-size: 18px;
          letter-spacing: -0.24px;
          color: #8E8E93;
          padding-bottom: 13px;
          border-bottom: 2px solid transparent;
          text-align: center;

          &.active {
              color: #313439;
              border-bottom: 2px solid #313439;
          }
          & a {
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
          }
      }
  }
}
</style>
