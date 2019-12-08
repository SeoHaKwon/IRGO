<template>
  <div class="HomePerformance contaner">
    <h2 class="section-title">실적발표</h2>
    <h3 class="section-sube">
      Quarter Earnings Results
    </h3>
    <!-- 실적발표 -->
    <PerformanceContents
      :datas="type_D" :silq="silQ" :silj="silJ" v-on:changeQuarter="getQuarter"
    />
    <!-- <div style="margin-top: 40px">
      <PerformanceContents
        :datas="type_B" :silq="silQ" :silj="silJ" v-on:changeQuarter="getQuarter"
      />
    </div> -->
  <!-- FAQ -->
    <PerformanceFAQ v-on:changeQuarterfaq="getfaqQuarter"/>

    <div style="margin-top: 40px">
      <PerformanceFAQTypeB />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PerformanceContents from '@/components/PerformanceContents.vue'
import PerformanceFAQ from '@/components/PerformanceFAQ.vue'
import PerformanceFAQTypeB from '@/components/PerformanceFAQTypeB.vue'

export default {
  name: 'HomePerformance',
  data() {
    return {
      type_D: [],
      silQ: [],
      silJ: {}
    }
  },
  components: {
    PerformanceContents,
    PerformanceFAQ,
    PerformanceFAQTypeB
  },
  computed: {
    ...mapGetters(['getCompCode', 'getCompSeq'])
  },
  methods: {
    getfaqQuarter (q) {
      console.log(q)
    },
    getQuarter (req) {
      this.changeQuarterData(req.split('.')[0], req.split('.')[1])
    },
    changeQuarterData (year, quat) {
      const _self = this
      const aram = {
        seq: _self.getCompSeq,
        year: "20" + year,
        quarter: quat.split('Q')[0]
      }
      const pres = this.$store.dispatch('GET_SILJ', aram)
      pres.then(result => {
        _self.silJ = result[0]
        result.splice(0, 1)
        /* SET_DATA_TYPE */
        _self.type_D = result
      })
    }
  },
  watch: {
    getCompSeq () {
      const _self = this
      const param = {
        code: _self.getCompCode,
        seq: _self.getCompSeq
      }
      const res = this.$store.dispatch('GET_SILQ', param)
      res.then(data => {
        for (let i = 0; i < data.length; i++) {
          if (i === 0) {
            const aram = {
              seq: _self.getCompSeq,
              year: "20" + data[i].YEAR,
              quarter: data[i].PERIOD
            }
            const pres = this.$store.dispatch('GET_SILJ', aram)
            pres.then(result => {
              if (result[0].SET_DATA_TYPE == 0 || result[0].SET_DATA_TYPE == 1) {
                _self.silJ = result[0]
                result.splice(0, 1)
              }
              /* SET_DATA_TYPE */
              for (var key in result) {
                if (result[key].SET_DATA_TYPE == 2) {
                  result[key].TITLE = '보도자료(press Release)'
                } else if (result[key].SET_DATA_TYPE == 3) {
                  result[key].TITLE = '웹캐스팅'
                } else if (result[key].SET_DATA_TYPE == 4) {
                  result[key].TITLE = '컨퍼런스콜'
                } else if (result[key].SET_DATA_TYPE == 5) {
                  result[key].TITLE = '스크립트'
                } else if (result[key].SET_DATA_TYPE == 6) {
                  result[key].TITLE = 'Factsheet'
                }
              }
              if (result.length > 3) {
                _self.type_A = result
              } else {
                _self.type_B = result
              }
            })
          }
          let q = data[i].YEAR + "." + data[i].PERIOD + "Q"
          _self.silQ.push(q)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.HomePerformance {
  padding-top: 200px;
  .performance-group-tab {
    display: none;
    }

  .performance-select {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 40px;
  }

  @media ( max-width: 899px ) {
    padding: 38px 0;

    .performance-select {
      display: none;
      align-items: center;
      justify-content: flex-end;
    }

    .performance-group-tab {
        padding: 0 16px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;

        li {
            flex-basis: calc(20% - 11px);
            font-size: 18px;
            letter-spacing: -0.24px;
            color: #8E8E93;
            padding-bottom: 13px;
            border-bottom: 2px solid transparent;

            &.active {
                color: #313439;
                border-bottom: 2px solid #313439;
            }
        }
    }
  }
}
</style>
