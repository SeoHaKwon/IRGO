<template>
  <div class="HomeIrNews contaner">
    <h2 class="section-title-roboto">IR News</h2>
    <h3 class="section-sube">
      Briefing & Press Release
    </h3>
    <ul class="ir-news-content">
        <li v-for="(items, idx) in NewsList" v-on:click="clickModal(true, idx)" v-bind:key="idx">
            <img v-if="items.UPLOAD_THUMBNAIL" class="image" :src="'https://file.irgo.co.kr/data/BOARD/ATTACH_IMG/' + items.UPLOAD_THUMBNAIL"/>
            <div class="information">
                <h5 class="PC" :style="{ color: mcolor }">{{ items.TOPIC_TYPE }}</h5>
                <h4>{{ items.TITLE }}</h4>
                <h6>
                  <span class="mobile" :style="{ color: mcolor }">{{ items.TOPIC_TYPE }}</span>
                  {{ items.REG_DATE | v_date}}
                </h6>
            </div>
        </li>
    </ul>
    <div class="home-more-btn" v-if="allData.length !== 0">
      <button type="button" v-on:click="moreData">
      <h6>더보기</h6>
      <img width="12px" src="../assets/img/more_arrow.png"/>
      </button>
    </div>

    <modal-desktop v-if="isIRModal">
        <div slot="body">
            <div class="modal-desktop-close" v-on:click="clickModal(false)">
                <img width="40px" src="../assets/img/ic_modal_close.png"/>
            </div>
            <div class="modal-mobile-header">
              <svg style="width:32px;height:32px" viewBox="0 0 24 24" v-on:click="clickModal(false)">
                <path fill="#313439" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
              </svg>
              <span style="color:#313439;">IR News</span>
            </div>
            <h5 class="modal-map">Investor Relations > IR News</h5>
            <h5 class="IR-modal-category" :style="{ color: mcolor }">{{ v_TOPIC_TYPE}}</h5>
            <h5 class="IR-modal-title">
                {{ v_TITLE}}
            </h5>
            <div class="social-info">
                <h5 class="date">
                    {{ v_REG_DATE | v_date}}
                </h5>
                <!-- <div class="social-sns">
                    <img
                        width="7px"
                        src="../assets/img/modal_facebook.png"
                    />
                    <img
                        width="18px"
                        src="../assets/img/modal_twiiter.png"
                    />
                    <img
                        width="80px"
                        src="../assets/img/modal_share.png"
                    />
                </div> -->
            </div>
            <h4 class="IR-main-description" v-html="v_CONTENTS">
            </h4>
            <ul class="IR-modal-list" v-if="false">
                <li>
                    <img width="30px" src="../assets/img/IR_modal_left_arrow.png"/>
                    <h5>다음</h5>
                    <h4>JP Global TMT Conference 발표자료</h4>
                </li>
                <li>
                    <img width="30px" src="../assets/img/IR_modal_right_arrow.png"/>
                    <h5>이전</h5>
                    <h4>JP Global TMT Conference 발표자료</h4>
                </li>
            </ul>
        </div>
    </modal-desktop>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomeIrNews',
  components: {
  },
  data () {
    return {
      isIRModal: false,
      modalDescription: '',
      modalDescriptionSub: '',
      NewsList: [],
      v_TITLE: '',
      v_TOPIC_TYPE: '',
      v_CONTENTS: '',
      v_REG_DATE: '',
      mcolor: '',
      allData: []
    }
  },
  filters: {
    v_date: function (date) {
      const key = new Date(date)
      const year = key.getFullYear()
      const month = key.getMonth() + 1
      const day = key.getDate()
      return year + '년 ' + month + '월 ' + day + '일'
    },
    v_titlecut: function (title) {
      return title
      // return title.substr(0,100)
    }
  },
  methods: {
    clickModal (isOpen, idx) {
      const globalBody = document.getElementsByTagName('html')[0]
      if (isOpen) {
        globalBody.style.overflow = 'hidden'
        this.chageData(idx)
      } else {
        globalBody.style.overflow = 'inherit'
      }
      this.isIRModal = isOpen
    },
    chageData (idx) {
      const _self = this
      _self.v_TITLE = _self.NewsList[idx].TITLE
      _self.v_TOPIC_TYPE = _self.NewsList[idx].TOPIC_TYPE
      if (_self.NewsList[idx].CONTENTS_E) {
        _self.v_CONTENTS = _self.NewsList[idx].CONTENTS_E.replace('display:inline', 'display:none')
      } else {
        _self.v_CONTENTS = _self.NewsList[idx].CONTENTS.replace('display:inline', 'display:none')
      }
      _self.v_REG_DATE = _self.NewsList[idx].REG_DATE
    },
    moreData () {
      const _self = this
      _self.NewsList = _self.NewsList.concat(_self.allData.splice(0, 5))
    }
  },
  computed: {
    ...mapGetters(['getCompSeq', 'getMainColor'])
  },
  watch: {
    getCompSeq () {
      const _self = this
      const aram = {
        seq: _self.getCompSeq
      }
      this.$store.dispatch('GET_IRNEWS', aram)
        .then(res => {
          for (var key in res) {
            if (res[key].TOPIC_TYPE === 'P') {
              res[key].TOPIC_TYPE = 'IR 자료'
            } else if (res[key].TOPIC_TYPE === 'N') {
              res[key].TOPIC_TYPE = '보도자료'
            } else if (res[key].TOPIC_TYPE === 'O') {
              res[key].TOPIC_TYPE = 'IR 자료'
            } else if (res[key].TOPIC_TYPE === 'R') {
              res[key].TOPIC_TYPE = 'IR 브리핑'
            } else if (res[key].TOPIC_TYPE === 'T') {
              res[key].TOPIC_TYPE = '주주서한'
            }
          }
          _self.NewsList = res.splice(0, 4)
          _self.allData = res
        })
    },
    getMainColor () {
      const _self = this
      _self.mcolor = '#' + _self.getMainColor
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.IR-modal-list li h4 {
  font-size: 16px;
}
.IR-modal-list li h5 {
  font-size: 16px;
  margin-bottom: .0rem;
}
.HomeIrNews {
    padding-top: 200px;

    .ir-news-content {
        margin-top: 106px;
        list-style: none;

        li {
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            cursor: pointer;

            &:first-child {
                border-top: 1px solid $border-color;
            }

            & .image {
                flex-basis: 274px;
                margin-right: 20px;
                flex-shrink: 0;
                border-bottom: 1px solid transparent;
            }
            & .information {
                padding-bottom: 34px;
                border-bottom: 1px solid $border-color;
                flex: 1;
                padding-left: 20px;

                & h5.PC {
                    // color: $brand-color;
                    padding-top: 20px;
                    font-weight: bold;
                    font-size: 16px;
                }
                & h4 {
                    font-size: 21px;
                    letter-spacing: -0.5px;
                    color: $font-color-base;
                    margin-top: 14px;
                    height: 64px;
                }
                & h6 {
                    font-size: 12px;
                    letter-spacing: -0.5px;
                    color: #8E8E93;
                    margin-top: 22px;

                    & span {
                        display: none;
                    }
                }
            }
        }
    }
    .IR-modal-category {
        font-weight: bold;
        font-size: 16px;
        color: #E91E63;
        margin-top: 60px;
    }
    .IR-modal-title {
        font-weight: bold;
        font-size: 34px;
        letter-spacing: -0.5px;
        color: $font-color-base;
        margin-top: 23px;
        margin-bottom: 33px;
        height: 120px;
        border-bottom:1px solid #E5E5EA;
    }
    .IR-modal-main {
        margin-top: 33px;

        .main-caption {
            text-align: center;
            font-size: 14px;
            color: #8E8E93;
            margin-top: 18px;
        }
    }
    .inner-title {
        font-size: 24px;
        font-weight: bold;
    }
    .IR-main-description {
        margin-top: 57px;
        line-height: 2em;
        text-align: left;
    }
    .IR-modal-video {
        margin-top: 40px;
    }
    .IR-modal-list {
        list-style: none;
        margin-top: 50px;

        li {
            padding: 26px;
            border-top: 1px solid $border-color;
            display: flex;
            justify-content: left;
            align-items: center;

            &:last-child {
                border-bottom: 1px solid $border-color;
            }

            img {
                margin-right: 20px;
            }
            h5 {
                margin-right: 50px;
            }
            h4 {
            }
        }
    }
    @media ( max-width: 899px ) {
        .IR-modal-category {
            font-weight: bold;
            font-size: 12px;
            color: #E91E63;
            margin-top: 24px;
        }
        .IR-modal-title {
            font-weight: bold;
            font-size: 22px;
            letter-spacing: -0.5px;
            color: $font-color-base;
            margin-top: 8px;
            word-wrap: normal;
            line-height: 1.4;
        }
        .IR-modal-main {
            margin-top: 30px;

            .main-caption {
                text-align: center;
                font-size: 12px;
                color: #8E8E93;
                margin-top: 18px;
            }
        }
        .inner-title {
            font-size: 20px;
            font-weight: bold;
        }
        .IR-main-description {
          margin-top: 30px;
          line-height: 1.6em;
          font-size: 16px;
          font-weight: 400;
          color: #313439;
          word-break: break-all;
          text-align: left;
          word-spacing: -0.05em;

            img {
              max-width: 100%;
            }
            p {
              word-break: break-all;
              text-align: justify;
              word-spacing: -0.05em;
            }
        }
        .IR-modal-video {
            margin-top: 40px;
        }
        .IR-modal-list {
            list-style: none;
            margin-top: 30px;

            li {
                padding: 26px;
                border-top: 1px solid $border-color;
                display: flex;
                justify-content: left;
                align-items: center;

                &:last-child {
                    border-bottom: 1px solid $border-color;
                }

                img {
                    margin-right: 20px;
                }
                h5 {
                    margin-right: 50px;
                }
                h4 {
                }
            }
        }
    }
    @media ( max-width: 899px ) {
        // padding: 38px 0;
        padding: 55px 0;
        border-top: 8px solid #EFEFF4;

        .ir-news-content {
            margin-top: 50px;
            list-style: none;
            padding: 0 16px;

            li {
                padding: 20px 0;
                border-bottom: 1px solid $border-color;
                display: flex;
                justify-content: space-between;

                &:first-child {
                    border-top: 1px solid $border-color;
                }

                & .image {
                    overflow: hidden;
                    flex-basis: 30%;
                    width: 30%;
                    flex-shrink: 0;
                    margin-bottom: 0;
                    margin-right: 20px;
                    height:100%;
                }
                & .information {
                    flex-basis: calc(100% - 274px);
                    padding: 0;
                    border-bottom: 0;

                    & h5.PC {
                        display: none;
                        // color: $brand-color;
                        font-weight: bold;
                        font-size: 10px;
                    }
                    & h4 {
                        font-size: 16px;
                        letter-spacing: -0.5px;
                        color: $font-color-base;
                        margin-top: 0;
                        height: 50px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        line-height: 1.2em;
                        height: 2.4em;
                    }
                    & h6 {
                        font-size: 10px;
                        letter-spacing: -0.5px;
                        color: #8E8E93;
                        margin-top: 15px;

                        & span {
                            display: inline;
                            // color: $brand-color;
                            font-weight: bold;
                            font-size: 10px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>
