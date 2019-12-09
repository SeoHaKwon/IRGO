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
  .main-wrap {
    min-height:100%;
    background-color:#040713;
  }

</style>
