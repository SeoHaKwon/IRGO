<template>
  <div class="about">
    <h1>This is an about pages</h1>
    <button v-on:click="yesView">click</button><br><br>
    <swipe>
      <swipe-item><Test-Comp/></swipe-item>
      <swipe-item><Test-Comp2/></swipe-item>
    </swipe>
  </div>
</template>

<script>
import TestComp from './test1'
import TestComp2 from './test2'
export default {
  components: {
    TestComp,
    TestComp2
  },
  data: () => {
    return {
      isView: false
    }
  },
  methods: {
    yesView: function () {
      const _this = this
      _this.isView = !_this.isView
    }
  }
}
</script>

<style scoped>

</style>
