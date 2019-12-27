<template>
  <div>
    <component :is="selectedComponents"></component>
  </div>
</template>

<script>
import AHOME from '@/views/TypeA/Home'
import BHOME from '@/views/TypeB/Home'

export default {
  components: {
    AHOME,
    BHOME
  },
  data: () => {
    return {
      selectedComponents: ''
    }
  },
  mounted () {
    const _self = this
    const param = {
      // 'url': window.location.hostname
      'url': 'adtek.irpage.co.kr'
    }
    this.$store.dispatch('GET_PAGETYPE', param)
      .then(res => {
        if (res.IRPAGE_TYPE === 'A') {
          _self.selectedComponents = 'AHOME'
        } else if (res.IRPAGE_TYPE === 'B') {
          _self.selectedComponents = 'BHOME'
        }
        _self.$store.dispatch('SET_INFO', param)
      })
  }
}
</script>

<style>

</style>
