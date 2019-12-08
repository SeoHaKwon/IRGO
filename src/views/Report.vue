<template>
  <div class="sub-wrap">
    <div class="sub-visual-wrap">
      <SubVisual/>
      <div class="sub-info-txt">
        <div class="inner">
          <strong class="sub-title">경영보고서</strong>
          <div class="history">
            <span class="icon-home">
              <img src="../assets/images/icon/icon_home.png" alt="">
            </span>
            <span>경영보고서</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-top">
      <RportTab/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import RportTab from '@/components/RportTab.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'status',
  components: {
    SubVisual,
    RportTab,
    Footer
  },
}

</script>

<style lang="scss">
  @import "@/style/_mixin.scss";
</style>