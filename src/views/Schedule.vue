<template>
  <div class="sub-wrap">
    <div class="sub-visual-wrap">
      <SubVisual/>
      <div class="sub-info-txt">
        <div class="inner">
          <strong class="sub-title">IR 일정</strong>
          <div class="history">
            <span class="icon-home">
              <img src="../assets/images/icon/icon_home.png" alt="">
            </span>
            <span>IR 일정</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-top">
      <NewSchedule/>
    </div>
    <div class="content-bottom">
      <TextBoard/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import NewSchedule from '@/components/NewSchedule.vue'
import TextBoard from '@/components/TextBoard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'schedule',
  components: {
    SubVisual,
    NewSchedule,
    TextBoard,
    Footer
  }
}

</script>

<style lang="scss">
@import "@/style/_mixin.scss";
</style>
