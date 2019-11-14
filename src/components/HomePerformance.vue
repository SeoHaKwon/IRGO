<template>
  <div class="HomePerformance contaner">
    <h2>실적발표</h2>
    <!-- 실적발표 -->
    <PerformanceContents />
  <!-- FAQ -->
    <PerformanceFAQ />
  </div>
</template>

<script>
import PerformanceContents from '@/components/PerformanceContents.vue'
import PerformanceFAQ from '@/components/PerformanceFAQ.vue'

export default {
  name: 'HomePerformance',
  components: {
    PerformanceContents,
    PerformanceFAQ
  }
}
</script>
<style lang="scss">
.HomePerformance {
  padding: 120px 0;

  .contaner {
    width: 1150px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
  }
  @media ( max-width: 1149px ) {
    padding: 30px 15px;

    .contaner {
      width: 100%;
    }

    h2 {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
