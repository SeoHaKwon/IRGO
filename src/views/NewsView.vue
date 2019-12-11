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
    <div class="content-bottom">
      <NewsDetail/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import NewsDetail from '@/components/NewsDetail.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'schedule',
  components: {
    SubVisual,
    NewsDetail,
    Footer
  },
}

</script>
