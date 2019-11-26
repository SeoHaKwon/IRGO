<template>
  <div class="HomePerformance contaner">
    <h2 class="section-title">실적발표</h2>
    <h3 class="section-sube">
      Quarter Earnings Results
    </h3>
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
  padding: 130px 0;
  .performance-group-tab {
    display: none;
    }

  .performance-select {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .section-title {
    padding-top: 36px;
    font-weight: bold;
    font-size: 46px;
    color: #1B1D20;
    position: relative;

    &::after {
      width: 20000px;
      height: 2px;
      background: #1B1D20;
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
  }

  @media ( max-width: 899px ) {
    padding: 50px 0;

    .section-title {
        padding: 0 16px;
      font-weight: bold;
      font-size: 32px;
      color: #1B1D20;
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

    .performance-group-tab {
        padding: 0 16px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;

        li {
            flex-basis: calc(20% - 11px);
            font-size: 18px;
            letter-spacing: -0.24px;
            color: #8E8E93;
            padding-bottom: 13px;
            border-bottom: 2px solid transparent;

            &.active {
                color: #313439;
                border-bottom: 2px solid #313439;
            }
        }
    }
  }
}
</style>
