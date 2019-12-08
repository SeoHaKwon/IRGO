<template>
  <div class="PerformanceContents">
      <ul class="performance-group-tab">
        <li v-for="(items, idx) in silq" v-bind:key="idx" v-on:click="getContents(items, idx)" :class="isActive[idx]">
          <a>{{ items }}</a>
        </li>
      </ul>
        <div class="performance-select">
            <div class="select-warp">
                <select>
                    <option v-for="(items, idx) in silq" v-on:change="getContents(items, idx)">{{ '20' + items }}</option>
                </select>
                <div class="select-arrow">▲</div>
            </div>
        </div>
        <div class="performance-contents container">
            <div class="performance-main">
                <div 
                  v-if="datas.length > 3"
                  class="main-title"
                >
                    <h2 class="title">
                        {{ silj.TITLE }}
                    </h2>
                    <div class="download" v-on:click="getFiles(silj.UPLOAD_FILE1)">
                        <img 
                            src="../assets/img/ic_file_download.png"
                        />
                    </div>
                </div>
                <div>
                    <img 
                        width="100%"
                        :src="thumbnail"
                    />                    
                </div>
            </div>
            <div 
              class="performance-info"
            >
              <div 
                class="main-title"
                v-if="datas.length < 4"
              >
                  <h2 class="title">
                      {{ silj.TITLE }}
                  </h2>
                  <div class="download" v-on:click="getFiles(silj.UPLOAD_FILE1)">
                      <img 
                          src="../assets/img/ic_file_download.png"
                      />
                  </div>
              </div>
                <ul>
                    <li v-for="(data, idx) in datas" :class="{'less-length': datas.length < 4}" v-bind:key="idx">
                        <h5>{{ data.title }}</h5>
                        <h6>
                            <img
                              v-if="data.type === 'URL'"
                            width="30px"
                             src="../assets/img/ic_arrow_forward.png"
                            />
                            <img
                              v-else
                            width="30px"
                             src="../assets/img/ic_file_download.png"
                            />
                            <span class="data-type">{{ data.type }}</span>
                        </h6>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'PerformanceContents',
  props: [
    'datas',
    'silq',
    'silj'
  ],
  data: () => {
    return {
      nActive: 0,
      thumbnail: '',
      isActive: {
        0: 'active',
        1: '',
        2: '',
        3: '',
        4: ''
      },
      ori_active: 0
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    getFiles (url) {
      window.location = 'https://file.irgo.co.kr/data/BOARD/ATTACH_PDF/' + url
    },
    getContents (quat, idx) {
      const _self = this
      _self.setActive(idx)
      _self.$emit('changeQuarter', quat)
    },
    setActive (idx) {
      const _self = this
      _self.isActive[_self.ori_active] = ''
      _self.isActive[idx] = 'active'
      _self.ori_active = idx
    }
  },
  watch: {
    silj () {
      const _self = this
      _self.thumbnail = "http://file.irgo.co.kr/data/BOARD/ATTACH_IMG/" + _self.silj.UPLOAD_THUMBNAIL
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.download {
  cursor: pointer;
}
.PerformanceContents {
  
  .performance-select {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

    .performance-contents {
        background: #F2F2F2;
        padding: 50px;
        margin-top: 53px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .performance-main {
            flex-basis: 50%;
            padding-right: 50px;
        }
        .main-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;

            & .title {
                /* 추가 */
                margin-left:20px;
                /* 추가 */
                font-size: 34px;
                font-weight: normal;
                text-decoration-line: underline;
                color: $font-color-base;
            }

            .download {
                background: #FFFFFF;
                border: 1px solid #D2D3D3;
                box-sizing: border-box;
                border-radius: 4px;
                padding: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 92px;
                height: 92px;
            }
        }
        .performance-info {
            flex-basis: 50%;
            padding-left: 50px;
            ul {
                list-style: none;

                li {
                    padding-bottom: 38px;
                    border-bottom: 1px solid $border-color;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 38px;

                    &.less-length {
                        padding-bottom: 28px;
                        margin-bottom: 28px;
                    }

                    &:last-child {
                        margin-bottom: 0;
                        border-bottom: 0;
                        padding-bottom: 0;
                    }

                    & h5 {
                        font-size: 21px;
                        letter-spacing: -0.5px;
                        color: $font-color-base;
                    }
                    & h6 {
                        display: flex;
                        align-items: center;
                        font-size: 21px;
                        letter-spacing: -0.5px;
                        color: $brand-color;
                    }
                }
            }
        }
    }
  @media ( max-width: 899px ) {
    .performance-select {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      display: none;
    }

      .performance-contents {
          width: 100%;
          margin: 0 auto;
          background: #F2F2F2;
          padding: 30px 16px;
          margin-top: 0;
          display: block;
          justify-content: space-between;

          .performance-main {
              flex-basis: 50%;
              padding-right: 0;
              .main-title {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 30px;

                  & .title {
                    /* 추가 */
                      width: 385px;
                    /* 추가 */
                      font-size: 22px;
                      font-weight: normal;
                      text-decoration-line: underline;
                      color: $font-color-base;
                  }

                  .download {
                      background: #FFFFFF;
                      border: 1px solid #D2D3D3;
                      box-sizing: border-box;
                      border-radius: 4px;
                      padding: 15px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      width: 64px;
                      height: 64px;
                  }
              }
          }

          .performance-info {
              flex-basis: 50%;
              padding-left: 0;
              margin-top: 27px;

              .main-title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;

                    & .title {
                        font-size: 22px;
                        font-weight: normal;
                        text-decoration-line: underline;
                        color: #1B1D20;
                    }

                    .download {
                        background: #FFFFFF;
                        border: 1px solid #D2D3D3;
                        box-sizing: border-box;
                        border-radius: 4px;
                        padding: 15px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 64px !important;
                        height: 64px !important;
                    }
                }
              ul {
                  list-style: none;

                  li {
                      padding-bottom: 16px;
                      border-bottom: 1px solid $border-color;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-bottom: 16px;

                      &.less-length {
                        padding-bottom: 16px;
                        margin-bottom: 16px;
                    }

                      &:last-child {
                          margin-bottom: 0;
                      }

                      & h5 {
                          font-size: 16px;
                          letter-spacing: -0.5px;
                          color: $font-color-base;
                      }
                      & h6 {
                          display: flex;
                          align-items: center;
                          font-size: 21px;
                          letter-spacing: -0.5px;
                          color: $brand-color;

                          .data-type {
                            display: none;
                        }
                      }
                  }
              }
          }
      }
      .performance-main {
          flex-basis: 50%;
          padding-right: 0 !important;
          .main-title {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 30px;

              & .title {
                  font-size: 22px;
                  font-weight: normal;
                  text-decoration-line: underline;
                  color: #1B1D20;
              }

              .download {
                  background: #FFFFFF;
                  border: 1px solid #D2D3D3;
                  box-sizing: border-box;
                  border-radius: 4px;
                  padding: 15px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 64px;
                  height: 64px;
              }
          }
      }
  }
  
}
</style>
