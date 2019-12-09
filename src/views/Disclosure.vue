<template>
  <div class="sub-wrap">
    <div class="sub-visual-wrap">
      <SubVisual/>
      <div class="sub-info-txt">
        <div class="inner">
          <strong class="sub-title">공시</strong>
          <div class="history">
            <span class="icon-home">
              <img src="../assets/images/icon/icon_home.png" alt="">
            </span>
            <span>공시</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <DisclosureBoard/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import DisclosureBoard from '@/components/DisclosureBoard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'schedule',
  components: {
    SubVisual,
    DisclosureBoard,
    Footer
  },
}

</script>

<style lang="scss">
</style>