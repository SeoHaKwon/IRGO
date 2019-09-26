<template>
  <div>
    this fPrint
    <router-link to="alertC">alert</router-link>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      btnTxt: 'alert'
    }
  },
  methods: {
    galert () {
      console.log('test')
    }
  }
}
</script>

<style>

</style>
