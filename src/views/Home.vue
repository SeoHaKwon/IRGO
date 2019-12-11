<template>
    <div class="main-wrap">
      <MainVisual/>
      <MainContent/>
    </div>
</template>

<script>
// @ is an alias to /src
import MainVisual from '@/components/MainVisual.vue'
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'home',
  components: {
    MainVisual,
    MainContent
  }
}
</script>
<style lang="scss">
@import "@/style/_mixin.scss";
  .main-wrap {
    padding:0 30px;
    min-height:100%;
    background-color:#040713;
    @include bgImg(img/img_visual);
      background-repeat: no-repeat;
      background-position: center top;
      background-size: contain;
      background-attachment: fixed;
  }

</style>
