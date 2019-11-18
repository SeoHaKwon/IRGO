<template>
  <div class="home">
  	<!-- 메인 -->
  	<HomeMainVisual />

  	<!-- 메인 인포 -->
  	<HomeMainInformation />

  	<!-- 스케줄 -->
  	<HomeSchedule />

	<!-- 실적발표 -->
  	<HomePerformance />

	<!-- IR 뉴스 -->
  	<HomeIrNews />

	<!-- 경영 보고서 -->
  	<HomeManagementReport />

  	<!-- 공시 -->
  	<HomeDisclosure />

	<!-- 주주 현황 -->
  	<HomeShareholderStatus />
  </div>
</template>

<script>
import HomeMainVisual from '@/components/HomeMainVisual.vue'
import HomeMainInformation from '@/components/HomeMainInformation.vue'
import HomeSchedule from '@/components/HomeSchedule.vue'
import HomePerformance from '@/components/HomePerformance.vue'
import HomeIrNews from '@/components/HomeIrNews.vue'
import HomeManagementReport from '@/components/HomeManagementReport.vue'
import HomeDisclosure from '@/components/HomeDisclosure.vue'
import HomeShareholderStatus from '@/components/HomeShareholderStatus.vue'

export default {
  name: 'home',
  components: {
    HomeMainVisual,
    HomeMainInformation,
    HomeSchedule,
    HomePerformance,
    HomeIrNews,
    HomeManagementReport,
    HomeDisclosure,
    HomeShareholderStatus
  }
}
</script>
<style lang="scss">

.contaner {
	width: 1150px;
	margin: 0 auto;
}

.home-more-btn {
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-top: 30px;

  & button {
      display: flex;
      justify-content: center;
      align-items: center; 
      appearance: none;
      border: 2px solid #ddd;
      border-radius: 100px;
      padding: 15px;
      text-align: center;
      width: 200px;
      background: transparent;
      
      & h6 {
        font-size: 13px;
        color: #ddd;
        font-weight: bold;
      }

      & img {
        transform: rotate(90deg);
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

@media ( max-width: 1149px ) {
  .contaner {
  	width: 100%;
  }

  .home-more-btn {
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 30px;

    & button {
        display: flex;
        justify-content: center;
        align-items: center; 
        appearance: none;
        border: 2px solid #ddd;
        border-radius: 100px;
        padding: 5px 15px;
        text-align: center;
        width: 110px;
        background: transparent;
        
        & h6 {
          font-size: 13px;
          color: #ddd;
          font-weight: bold;
        }

        & img {
          transform: rotate(90deg);
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
}
</style>
