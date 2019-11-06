<template>
  <div id="app">    
    <NavigationBar />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'app',
  components: {
    NavigationBar
  }
}
</script>
<style lang="scss">
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

* {
  font-family: 'Nanum Gothic';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.flex-lefet-center {
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>
