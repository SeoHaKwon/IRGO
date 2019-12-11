<template>
  <div class="HomeFinanceInfo contaner" v-if="finance.length > 0">
    <h2 class="section-title">재무정보</h2>
    <h3 class="section-sube">
      Financial Statements
    </h3>
    <ul class="performance-group-tab fin">
      <li v-for="(item, idx) in finance" v-on:click="setQuarter(item.YEAR + '.' + item.PERIOD + 'Q', idx)" :class="isActive[idx]">
        <a>{{ item.QUARTER }}</a>
      </li>
      <li v-for="n in 5-finance.length" v-bind:key="n"></li>
    </ul>
      <div class="finance-select">
          <div class="select-warp">
              <select v-on:change="zsetQuarter($event)">
                  <option v-for="(item, idx) in finance" :value="idx">{{ item.YEAR + '.' + item.PERIOD + 'Q' }}</option>
              </select>
              <div class="select-arrow">▲</div>
          </div>
      </div>
    <ul class="finance-info">
        <li>
            <h5>재무상태표</h5>
            <h6>
              <a v-if="nowQ" :href="'https://file.irgo.co.kr/data/IRPAGE/FINANCE/'+finance[nowQ].UPLOAD_FILE1" target="_BLANK">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path v-bind:fill="mcolor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
              </a>
                <span class="data-type" :style="{ color: mcolor}">PDF</span>
            </h6>
        </li>
        <li>
            <h5>손익계산서</h5>
            <h6>
                <a v-if="nowQ" :href="'https://file.irgo.co.kr/data/IRPAGE/FINANCE/'+finance[nowQ].UPLOAD_FILE2" target="_BLANK">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path v-bind:fill="mcolor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                  </svg>
                </a>
                <span class="data-type" :style="{ color: mcolor}">PDF</span>
            </h6>
        </li>
        <li>
            <h5>현금흐름표</h5>
            <h6>
                <a v-if="nowQ" :href="'https://file.irgo.co.kr/data/IRPAGE/FINANCE/'+finance[nowQ].UPLOAD_FILE3" target="_BLANK">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path v-bind:fill="mcolor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                  </svg>
                </a>
                <span class="data-type" :style="{ color: mcolor}">PDF</span>
            </h6>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomeFinanceInfo',
  components: {
  },
  data: () => {
    return {
      nowQ: '',
      finance: [],
      isActive: {
        0: 'active',
        1: '',
        2: '',
        3: '',
        4: ''
      },
      ori_active: 0,
      mcolor: ''
    }
  },
  computed: {
    ...mapGetters(['getCompSeq', 'getMainColor'])
  },
  mounted() {
  },
  methods: {
    setQuarter (Q, idx) {
      const _self = this
      _self.nowQ = Q
      _self.setActive(idx)
    },
    zsetQuarter (e) {
      // console.log(e.target.value.substr(2))
      const _self = this
      _self.nowQ = e.target.value
      _self.setActive(e.target.value)
    },
    setActive (idx) {
      const _self = this
      _self.isActive[_self.ori_active] = ''
      _self.isActive[idx] = 'active'
      _self.ori_active = idx
    }
  },
  watch: {
    getCompSeq () {
      const _self = this
      const aram = {
        seq: _self.getCompSeq
      }
      const pres = this.$store.dispatch('GET_FINANCE', aram)
      .then(res => {
        if (res.length !== 0 ) {
          _self.nowQ = res[0].YEAR+'.'+res[0].PERIOD+'Q'
          const cons = 5 - res.length
          for (let i = 0; i < res.length; i++) {
            res[res[i].YEAR+'.'+res[i].PERIOD+'Q'] = res[i]
            res[res[i].YEAR+'.'+res[i].PERIOD+'Q'].QUARTER = res[i].YEAR.substr(2,2)+'.'+res[i].PERIOD+'Q'
          }
          _self.finance = res
        }
      })
    },
    getMainColor () {
      const _self = this
      _self.mcolor = '#'+_self.getMainColor
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeFinanceInfo {
    padding-top: 200px;

    .finance-select {
        display: flex;
        justify-content: flex-end;
        margin-top: 40px;
    }

    .finance-info {
        margin-top: 53px;
        list-style: none;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px 20px;
            border-bottom: 1px solid $border-color;
            height: 120px;

            &:first-child {
                border-top: 1px solid $border-color;
            }

            h5 {
                font-size: 21px;
                letter-spacing: -0.5px;
                color: $font-color-base;
            }
            h6 {
                font-size: 18px;
                display: flex;
                align-items: center;
                text-align: right;
                color: $brand-color;
            }
        }
    }

    @media ( max-width: 899px ) {
        padding: 38px 0;
        border-top: 8px solid #EFEFF4;

        .finance-select {
            display: flex;
            justify-content: flex-end;
            margin-top: 13px;
            display: none;
        }

      .finance-info {
          margin-top: 0;
          list-style: none;
          padding: 0 16px;

          li {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px 0;
              border-bottom: 1px solid $border-color;
              height: auto;

              &:first-child {
                  border-top: 0;
              }

              h5 {
                  font-size: 16px;
                  letter-spacing: -0.5px;
                  color: $font-color-base;
              }
              h6 {
                  font-size: 18px;
                  display: flex;
                  align-items: center;
                  text-align: right;
                  color: $brand-color;

                  span {
                    display: none;
                  }
              }
          }
      }
    }

}
</style>
