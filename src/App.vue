<template>
  <div id="app" class="wrap">
    <Gnb/>
  </div>
</template>
<script>
import Gnb from '@/components/Gnb.vue'

export default {
  name: 'main',
  components: {
    Gnb
  }
}
</script>
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
.wrap {
	max-width:1920px;
  height:100%;
  &.active {
    overflow:hidden;
  }
}
</style>
