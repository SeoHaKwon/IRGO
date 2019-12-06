<template>
  <div class="main-visual">
    <MainVisual/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainVisual from '@/components/MainVisual.vue'

export default {
  name: 'home',
  components: {
    MainVisual
  }
}
</script>
<style scoped>
 .main-visual {
   background-color:red;
 }
</style>
