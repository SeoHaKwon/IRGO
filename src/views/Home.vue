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
  </div>
</template>

<script>
import HomeMainVisual from '@/components/HomeMainVisual.vue'
import HomeMainInformation from '@/components/HomeMainInformation.vue'
import HomeSchedule from '@/components/HomeSchedule.vue'
import HomePerformance from '@/components/HomePerformance.vue'

export default {
  name: 'home',
  components: {
    HomeMainVisual,
    HomeMainInformation,
    HomeSchedule,
    HomePerformance
  }
}
</script>
<style lang="scss">
.contaner {
	width: 1150px;
	margin: 0 auto;
}
</style>
