<template>
  <div id="app" class="wrap">
    <Gnb v-if="IRPAGE_TYPE === 'A'"/>
    <go-top
    :max-width="0"
    :size="50"
    :right="15"
    :bottom="70"
    :radius="7"
    bg-color="#8E8E93"
    box-shadow="5px 5px 5px rgba(0, 0, 0, .5)" v-if="IRPAGE_TYPE === 'A'">TOP</go-top>
  </div>
</template>
<script>
import Gnb from '@/components/TypeA/Gnb.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Gnb
  },
  data: () => {
    return {
      IRPAGE_TYPE: ''
    }
  },
  computed: {
    ...mapGetters([''])
  },
  beforeCreate () {
    const _self = this
    const param = {
      'url': 'adtek.irpage.co.kr'
    }
    this.$store.dispatch('GET_PAGETYPE', param)
      .then(res => {
        _self.IRPAGE_TYPE = res.IRPAGE_TYPE
        this.$store.dispatch('SET_INFO', param)
      })
  }
}
</script>
<style lang="scss">

</style>
