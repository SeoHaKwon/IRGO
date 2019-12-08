<template>
  <div class="HomeShareholderStatus contaner">
      <h2 class="section-title">주주현황</h2>
      <h3 class="section-sube">
        Shareholders Status
      </h3>
      <div class="shareholder-group">
          <h3 class="shareholder-group-title">
              주주구성
          </h3>
          <div class="shareholder-group-items">
              <div class="shareholder-group-chart">
                  <vc-donut
                      background="#ffffff" 
                      foreground="grey"
                      :size="70"
                      unit="%" 
                      :thickness="40"
                      legend-placement="bottom"
                      :sections="sections"
                      :total="100"
                      :start-angle="0"
                    />      
              </div>
              <div class="shareholder-group-table">
                  <table>
                    <colgroup>
                        <col width-="60%" />
                        <col width-="20%" />
                        <col width-="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <td>구분</td>
                            <td>주식수</td>
                            <td>비율</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in memberData">
                            <td>
                                <span 
                                    class="member-color"
                                    :style="`background: ${data.color}`"
                                ></span>
                                {{ data.title }}
                            </td>
                            <td>{{ data.value | currency}}</td>
                            <td>{{ data.percent }}%</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>합계</td>
                            <td>{{ totalJu | currency}}</td>
                            <td>100.0%</td>
                        </tr>
                    </tfoot>
                  </table>
              </div>
          </div>
          
        <div
            class="shareholder-group-caption"
             v-for="caption in memberCaption"
         >
            <h5 class="title">{{ caption.title }}</h5>
            <h5 class="description">{{ caption.dscription }}</h5>
        </div>
      </div>
      <div class="shareholder-data">
          <h3 class="shareholder-data-title">
              <span>배당내역</span>
                <div class="performance-select">
                    <div class="select-warp">
                        <select>
                            <option>2019.2Q</option>
                            <option>2019.2Q</option>
                            <option>2019.2Q</option>
                            <option>2019.2Q</option>
                        </select>
                        <div class="select-arrow" style="font-size:1rem!important">▲</div>
                    </div>
                </div>
          </h3>
              <ul class="performance-group-tab stock">
                <li v-for="(item, idx) in STOCK_YEAR" :class="isActive[idx]">
                  <a v-on:click="setActive(idx)">{{ item.F_YEAR }}</a>
                </li>
              </ul>
              <div class="shareholder-data-table">
                  <table>
                    <colgroup>
                        <col width-="50%" />
                        <col width-="30%" />
                        <col width-="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <td>구분</td>
                            <td></td>
                            <td>주식종류</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in datas">
                            <td>
                                {{ data.title }}
                            </td>
                            <td>
                                <h5 v-for="kind in data.kinds">
                                    {{ kind }}
                                </h5>
                            </td>
                            <td>
                                <h5 v-for="value in data.value">
                                    {{ value | currency }}
                                </h5>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>소계</td>
                            <td>{{STOCK_TOTAL | currency}}</td>
                        </tr>
                    </tfoot>
                  </table>
              </div>
          </div>
        <div
            class="shareholder-group-caption"
             v-for="caption in memberCaption"
         >
            <h5 class="title">{{ caption.title }}</h5>
            <h5 class="description">{{ caption.dscription }}</h5>
        </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Donut from 'vue-css-donut-chart'
import 'vue-css-donut-chart/dist/vcdonut.css'
import { mapGetters } from 'vuex'
Vue.use(Donut)

export default {
  name: 'HomeShareholderStatus',
  components: {
  },
  data () {
    return {
      isActive: {
        0: 'active',
        1: '',
        2: '',
        3: '',
        4: ''
      },
      ori_active: 0,
      totalJu: 0,
      STOCK_TOTAL: 0,
      STOCK_YEAR: [],
      sections: [
        { label: '최대주주', value: 0, color: '#EA1E64' },
        { label: '기관주주', value: 0, color: '#EE4B82' },
        { label: '외국인주주', value: 0, color: '#F278A2' },
        { label: '자사주', value: 0, color: '#424347' },
        { label: '개인주주 외', value: 0, color: '#8F8E95' }
      ],
      memberData: [
        {
          title: '최대주주 외 특수관계인',
          value: '-',
          percent: '-',
          color: '#E91E63'
        },
        {
          title: '기관주주',
          value: '-',
          percent: '-',
          color: '#E91E63'
        },
        {
          title: '외국인주주',
          value: '-',
          percent: '-',
          color: '#E91E63'
        },
        {
          title: '자사주',
          value: '-',
          percent: '-',
          color: '#313439'
        },
        {
          title: '개인주주 외',
          value: '-',
          percent: '-',
          color: '#8E8E93'
        }
      ],
      datas: [
        {
          title: '당기순이익(백만원)',
          value: [
            '-'
          ],
          kinds: [
            ''
          ]
        },
        {
          title: '배당성향',
          value: [
            '-'
          ],
          kinds: ''
        },
        {
          title: '주당 현금배당(원)',
          value: [
            '-',
            '-'
          ],
          kinds: [
            '보통주',
            '우선주'
          ]
        },
        {
          title: '주당 주식배당(주)',
          value: [
            '-',
            '-'
          ],
          kinds: [
            '보통주',
            '우선주'
          ]
        },
        {
          title: '배당총액(백만원)',
          value: [
            '-',
            '-'
          ],
          kinds: [
            '보통주',
            '우선주'
          ]
        }
      ],
      memberCaption: [
        {
          title: '주1)',
          dscription: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getCompSeq'])
  },
  created () {
  },
  filters: {
    currency: function (value) {
      return Number(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    }
  },
  mounted () {
  },
  methods: {
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
      const param = {
        seq: _self.getCompSeq
      }
      _self.$store.dispatch('GET_SHOLDER', param)
        .then(res => {
          _self.memberData[0].value = res[0].LARGE_STOCKHOLDER
          _self.totalJu += res[0].LARGE_STOCKHOLDER
          _self.memberData[1].value = res[0].INST_STOCKHOLDER
          _self.totalJu += res[0].INST_STOCKHOLDER
          _self.memberData[2].value = res[0].FOREIGN_STOCKHOLDER
          _self.totalJu += res[0].FOREIGN_STOCKHOLDER
          _self.memberData[3].value = res[0].TREA_STOCKHOLDER
          _self.totalJu += res[0].TREA_STOCKHOLDER
          _self.memberData[4].value = res[0].INDI_STOCKHOLDER
          _self.totalJu += res[0].INDI_STOCKHOLDER
          _self.memberData[0].percent = (res[0].LARGE_STOCKHOLDER / _self.totalJu * 100).toFixed(1)
          _self.memberData[1].percent = (res[0].INST_STOCKHOLDER / _self.totalJu * 100).toFixed(1)
          _self.memberData[2].percent = (res[0].FOREIGN_STOCKHOLDER / _self.totalJu * 100).toFixed(1)
          _self.memberData[3].percent = (res[0].TREA_STOCKHOLDER / _self.totalJu * 100).toFixed(1)
          _self.memberData[4].percent = (res[0].INDI_STOCKHOLDER / _self.totalJu * 100).toFixed(1)
          for (var key in _self.sections) {
            _self.sections[key].value = Number(_self.memberData[key].percent)
          }
        })
      _self.$store.dispatch('GET_DIVI', param)
        .then(res => {
          _self.STOCK_YEAR = res
          _self.datas[0]['value'][0] = Number(res[0].F_NET_PROFIT)
          _self.datas[1]['value'][0] = Number(res[0].F_PAYOUT_RATIO)
          _self.datas[2]['value'][0] = Number(res[0].F_CASH_DIV_COMMON)
          _self.datas[2]['value'][1] = Number(res[0].F_CASH_DIV_PERFERRED)
          _self.datas[3]['value'][0] = Number(res[0].F_STOCK_DIV_COMMON)
          _self.datas[3]['value'][1] = Number(res[0].F_STOCK_DIV_PERFERRED)
          _self.datas[4]['value'][0] = Number(res[0].F_DIV_TOT_COMMON)
          _self.datas[4]['value'][1] = Number(res[0].F_DIV_TOT_PERFERRED)
          _self.STOCK_TOTAL = Number(res[0].F_DIV_TOTAL)
          _self.memberCaption[0].title = res[0].F_DIV_COMMENT
        })
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeShareholderStatus {
  padding-top: 185px;

  .shareholder-data,
  .shareholder-group {
    margin-top: 106px;

    .shareholder-group-title {
        font-size: 32px;
        color: $font-color-base;
        border-bottom: 1px solid $border-color;
        padding-bottom: 42px;
    }
    .shareholder-data-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $border-color;
        padding-bottom: 42px;

        span {
            font-size: 32px;
            color: $font-color-base;
        }
    }
    .shareholder-group-items {
        padding-top: 80px;
        padding-bottom: 40px;
        display: flex;
        justify-content: space-between;

         .shareholder-group-chart {
            flex-basis: 50%;
            padding-left: 60px;
            // padding-top: 60px;
            padding-top: 4px;
         }

         .shareholder-group-table {
            flex-basis: 50%;
            padding-left: 60px;

            table {
                width: 100%;
                border-collapse: collapse;

                thead,
                tbody,
                tfoot{
                    border-bottom: 1px solid $border-color;
                }

                thead tr td {
                    padding: 10px 15px;
                    font-size: 19px;
                    text-align: right;
                    color: #8E8E93;

                    &:first-child {
                        text-align: left;
                    }
                }
                tbody tr td ,
                tfoot tr td {
                    font-size: 19px;
                    color: $font-color-base;
                    padding: 20px 15px;
                    text-align: right;

                    &:first-child {
                        text-align: left;
                    }
                }
                .member-color {
                    width: 14px;
                    height: 14px;
                    display: inline-block;
                    border-radius: 50%;
                }
            }
         }
    }
    .shareholder-data-table {
       table {
           width: 100%;
           border-collapse: collapse;
           padding-bottom: 40px;
           margin-top: 60px;

           thead,
           tfoot{
               border-bottom: 1px solid $border-color;
           }

           thead tr td {
               padding: 10px 15px;
               font-size: 19px;
               text-align: right;
               color: #8E8E93;

               &:first-child {
                 font-size: 14px;
                 text-align: left;
               }
               &:nth-child(3) {
                 font-size: 14px;
               }
           }
           tbody tr td {
            border-bottom: 1px solid $border-color;
           }
           tbody tr:last-child td {
            border-bottom: 0;
           }
           tbody tr td ,
           tfoot tr td {
               font-size: 19px;
               color: $font-color-base;
               padding: 10px 15px;
               text-align: right;
               vertical-align: baseline;

               &:first-child {
                   text-align: left;
                   font-size: 19px;
               }

               &:nth-child(2) {
                    color: #8E8E93;
               }

               & h5 {
                    padding: 10px 0;
                    font-size: 19px;
               }
           }
           tfoot tr td {
               font-size: 19px;
               color: $font-color-base;
               padding: 0 15px 20px 15px;
               text-align: right;

               &:first-child {
                   text-align: left;
                   font-size: 19px;
               }

               &:nth-child(2) {
                    color: #8E8E93;
               }

               & h5 {
                    padding: 10px 0;
                    font-size: 19px;
               }
           }
           .member-color {
               width: 14px;
               height: 14px;
               display: inline-block;
               border-radius: 50%;
           }
       }
    }
  }
  .shareholder-group-caption {
      display: flex;
      font-size: 14px;
      letter-spacing: -0.005em;
      color: #545454;
      margin-top: 20px;

      .title {
          margin-right: 20px;
          font-size: 12px;
      }
      .description {
          font-size: 12px;
      }
  }

  @media ( max-width: 899px ) {
        padding: 38px 0;
        border-top: 8px solid #EFEFF4;

        .performance-select {
            display: none;
        }

        .shareholder-data,
        .shareholder-group {
          margin-top: 50px;

          .shareholder-group-title {
              font-size: 22px;
              color: $font-color-base;
              border-bottom: 0;
              padding-bottom: 0;
              padding: 0 16px;
          }
          .shareholder-data-title {
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 0;
                padding: 0 16px;

              span {
                  font-size: 22px;
                  color: $font-color-base;
              }
          }
          .shareholder-group-items {
              padding-top: 20px;
              padding-bottom: 20px;
              display: block;
              justify-content: space-between;

               .shareholder-group-chart {
                  flex-basis: 50%;
                  padding-left: 0;
                  width: 80%;
                  margin-left: calc(100% - 89%)
               }

               .shareholder-group-table {
                  flex-basis: 50%;
                  padding-left: 0;
                  padding: 0 16px;
                  margin-top: 24px;

                  table {
                      width: 100%;
                      border-collapse: collapse;

                      thead,
                      tbody,
                      tfoot{
                          border-bottom: 1px solid $border-color;
                      }

                      thead tr td {
                          padding: 16px 0;
                          font-size: 14px;
                          text-align: right;
                          color: #8E8E93;

                          &:first-child {
                              text-align: left;
                          }
                      }
                      tbody tr td ,
                      tfoot tr td {
                          font-size: 14px;
                          color: $font-color-base;
                          padding: 16px 0;
                          text-align: right;

                          &:first-child {
                              text-align: left;
                          }
                      }
                      .member-color {
                          width: 8px;
                          height: 8px;
                          display: inline-block;
                          border-radius: 50%;
                      }
                  }
               }
          }
          .shareholder-data-table {
            padding: 0 16px;
             table {
                 width: 100%;
                 border-collapse: collapse;
                 margin-bottom: 20px;
                 margin-top: 20px;

                 thead,
                 tfoot{
                     border-bottom: 1px solid $border-color;
                 }

                 thead tr td {
                     padding: 16px 0;
                     font-size: 19px;
                     text-align: right;
                     color: #8E8E93;

                     &:first-child {
                         text-align: left;
                     }
                 }
                 tbody tr td {
                  border-bottom: 1px solid $border-color;
                 }
                 tbody tr:last-child td {
                  border-bottom: 0;
                 }
                 tbody tr td {
                     font-size: 14px;
                     color: $font-color-base;
                     padding: 16px 0;
                     text-align: right;

                     &:first-child {
                         text-align: left;
                         font-size: 14px;
                     }

                     &:nth-child(2) {
                          color: #8E8E93;
                     }

                     & h5 {
                          padding: 10px 0;
                          font-size:14px;
                     }
                 }
                 tfoot tr td {
                     font-size: 14px;
                     color: $font-color-base;
                     padding: 0 0 16px 0;
                     text-align: right;

                     &:first-child {
                         text-align: left;
                         font-size: 14px;
                     }

                     &:nth-child(2) {
                          color: #8E8E93;
                     }

                     & h5 {
                          padding: 10px 0;
                          font-size:14px;
                     }
                 }
                 .member-color {
                     width: 14px;
                     height: 14px;
                     display: inline-block;
                     border-radius: 50%;
                 }
             }
          }
        }
        .shareholder-group-caption {
            display: flex;
            font-size: 12px;
            letter-spacing: -0.005em;
            color: #545454;
            margin-top: 0;
            margin-bottom: 30px;
            padding: 0 16px;

            &:first-child {
                margin-top: 0;
            }

            .title {
                margin-right: 10px;
                flex-basis: 26px;
                font-size: 12px;
            }
            .description {
                flex-basis: calc(100% - 26px);
                font-size: 12px;
            }
        }
  }
}
</style>
