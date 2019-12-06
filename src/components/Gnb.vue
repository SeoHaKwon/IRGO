<template>
  <div class="gnb-wrap">
      <h1 class="logo">
        <router-link to="/">로고</router-link>
      </h1>
      <router-link to="/schedule">IR 일정</router-link>
      <router-link to="/announcement">실적발표</router-link>
      <router-link to="/news">IR News</router-link>
      <router-link to="/financial">채무정보</router-link>
      <router-link to="/status">주주현황</router-link>
      <router-link to="/disclosure">공시</router-link>
      <router-link to="/report">경영보고서</router-link>
      <router-link to="/contact">IR Contact</router-link>
      <router-view/>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
