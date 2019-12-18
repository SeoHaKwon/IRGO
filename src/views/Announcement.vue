<template>
  <div class="sub-wrap">
    <div class="sub-visual-wrap">
      <SubVisual/>
      <div class="sub-info-txt">
        <div class="inner">
          <strong class="sub-title">실적발표</strong>
          <div class="history">
            <span class="icon-home">
              <img src="../assets/images/icon/icon_home.png" alt="">
            </span>
            <span>실적발표</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-top">
      <AnnouncementTab/>
    </div>
    <div class="content-bottom">
      <QaBoard/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import AnnouncementTab from '@/components/AnnouncementTab.vue'
import QaBoard from '@/components/QaBoard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'schedule',
  components: {
    SubVisual,
    AnnouncementTab,
    QaBoard,
    Footer
  }
}

</script>
