<template>
  <div class="sub-wrap">
    <div class="sub-visual-wrap">
      <SubVisual/>
      <div class="sub-info-txt">
        <div class="inner">
          <strong class="sub-title">IR NEWS</strong>
          <div class="history">
            <span class="icon-home">
              <img src="../assets/images/icon/icon_home.png" alt="">
            </span>
            <span>IR NEWS</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-top">
      <NewsList/>
    </div>
    <div class="content-bottom">
      <ThumbnailBoard/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import NewsList from '@/components/NewsList.vue'
import ThumbnailBoard from '@/components/ThumbnailBoard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'schedule',
  components: {
    SubVisual,
    NewsList,
    ThumbnailBoard,
    Footer
  },
}

</script>
