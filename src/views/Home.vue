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
    position:relative;
    padding:0 40px;
    min-height:100%;
    background-color:#040713;
    overflow: hidden;
      &::after {
        display:block;
        position:absolute;
        left:50%;
        top:0;
        width:1920px;
        height:100%;
        left:50%;
        margin-left:-960px;
        @include bgImg(img/img_visual);
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: fixed;
        content:"";
      }
  }
@media screen and (max-width: 750px) {
  .main-wrap {
    padding:0;
  }
}
</style>
