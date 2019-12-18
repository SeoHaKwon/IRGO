<template>
  <div class="sub-wrap">
    <div class="sub-visual-wrap">
      <SubVisual/>
      <div class="sub-info-txt">
        <div class="inner">
          <strong class="sub-title">실적발표 <span>자주 하는 질문</span></strong>
          <div class="history">
            <span class="icon-home">
              <img src="../assets/images/icon/icon_home.png" alt="">
            </span>
            <span>실적발표</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <AnnouncementDetail/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import AnnouncementDetail from '@/components/AnnouncementDetail.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'announcementView',
  components: {
    SubVisual,
    AnnouncementDetail,
    Footer
  }
}

</script>

<style lang="scss">
@import "@/style/_mixin.scss";
</style>
