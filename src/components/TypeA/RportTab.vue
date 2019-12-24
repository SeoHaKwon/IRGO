<template>
  <div class="report-wrap">
    <ul class="report-direct">
      <li v-for="(item, idx) in sreportList" v-bind:key="idx" v-on:click="getSaveReport(item.url)">
        <p :class="item.class">{{item.name}}</p>
        <a href="javascript:void(0);" class="link"></a>
      </li>
    </ul>
    <div class="tab-section">
      <div class="select">
        <span class="selected txt">연도별 경영보고서</span>
      </div>
      <div class="tabs">
        <button type="button" class="tab" v-for="(item, index) in qList" v-on:click="changeYearList(index)" v-bind:key="index" :class="{ 'active': index === 0 }">{{ item }}</button>
        <!--클래스 active 주시면 활성화됩니다.-->
        <button type="button" class="tab" v-for="item in moreQuarterFor" v-bind:key="item">-</button>
      </div>
    </div>
    <div class="tab-cont active">
      <!--클래스 active 주시면 활성화됩니다.-->
      <div class="material-list report">
        <div class="material" v-if="v_reportData.UPLOAD_FILE1" v-on:click="v_totalReport(v_reportData.UPLOAD_FILE1)">
          <strong class="material-title">주주총회결과</strong>
          <a href="#" class="icon-file pdf">
            {{ COM_NM }} {{ v_reportData.YEAR.substr(2, 2)}}년 주주총회결과
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material" v-if="v_reportData.UPLOAD_FILE2" v-on:click="v_totalReport(v_reportData.UPLOAD_FILE2)">
          <strong class="material-title">사업보고서</strong>
          <a href="#" class="icon-file pdf">
            {{ COM_NM }} {{ v_reportData.YEAR.substr(2, 2)}}년 사업보고서
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material" v-if="v_reportData.UPLOAD_FILE3" v-on:click="v_totalReport(v_reportData.UPLOAD_FILE3)">
          <strong class="material-title">지속가능경영보고서</strong>
          <a href="#" class="icon-file pdf">
            {{ COM_NM }} {{ v_reportData.YEAR.substr(2, 2)}}년 지속가능경영보고서
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material" v-if="v_reportData.UPLOAD_FILE4" v-on:click="v_totalReport(v_reportData.UPLOAD_FILE4)">
          <strong class="material-title">연차보고서</strong>
          <a href="#" class="icon-file pdf">
            {{ COM_NM }} {{ v_reportData.YEAR.substr(2, 2)}}년 연차보고서
          </a>
          <a href="#" class="link"></a>
        </div>
      </div>
    </div>
    <div class="tab-cont"></div>
    <div class="tab-cont"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
// import SubVisual from '@/components/SubVisual'
// import Footer from '@/components/Footer'

export default {
  name: 'status',
  components: {
    // SubVisual,
    // Footer
  },
  data: () => {
    return {
      sreportList: [{
        name: '정관',
        url: '',
        class: 'report01'
      }, {
        name: '공시정보관리규정',
        url: '',
        class: 'report02'
      }, {
        name: '기업지배구조보고서',
        url: '',
        class: 'report03'
      }],
      qList: [],
      oriQ: 1,
      reportData: [],
      moreQuarterFor: 0,
      v_reportData: [],
      COM_NM: ''
    }
  },
  filters: {
    is_Quarter: function (data) {
      if (data) {
        return data
      } else {
        return '-'
      }
    }
  },
  computed: {
    ...mapGetters(['getCompSeq', 'getCompName'])
  },
  mounted () {
    const _self = this
    if (_self.getCompName) {
      _self.COM_NM = _self.getCompName
    }
    _self.getSReportData()
    _self.getVReportData()
  },
  watch: {
    getCompSeq () {
      const _self = this
      _self.getSReportData()
      _self.getVReportData()
    },
    getCompName () {
      const _self = this
      _self.COM_NM = _self.getCompName
    }
  },
  methods: {
    v_totalReport (url) {
      window.open('https://file.irgo.co.kr/data/IRPAGE/BIZ_REPORT/' + url, '_BLANK')
    },
    changeYearList (Q) {
      const _self = this
      if (_self.oriQ !== Q) {
        if (document.querySelector('.tabs').childNodes[_self.oriQ]) {
          document.querySelector('.tabs').childNodes[_self.oriQ].classList.remove('active')
        }
        if (document.querySelector('.tabs').childNodes[Q]) {
          document.querySelector('.tabs').childNodes[Q].classList.add('active')
        }
      }
      _self.oriQ = Q
    },
    getSaveReport (URL) {
      window.open('https://file.irgo.co.kr/data/IRPAGE/BIZ_REPORT/' + URL, '_BLANK')
    },
    getSReportData () {
      const _self = this
      const aram = {
        seq: _self.getCompSeq
      }
      this.$store.dispatch('GET_SREPORT', aram)
        .then(res => {
          if (res.length > 0) {
            _self.sreportList[0].url = res[0].UPLOAD_FILE1
            _self.sreportList[1].url = res[0].UPLOAD_FILE2
            _self.sreportList[2].url = res[0].UPLOAD_FILE3
          }
        })
    },
    getVReportData () {
      const _self = this
      const aram = {
        seq: _self.getCompSeq
      }
      this.$store.dispatch('GET_VREPORT', aram)
        .then(res => {
          if (res.length > 0) {
            if (res.length > 3) {
              res.splice(0, 3)
            }
            _self.qList = _.uniqBy(_.map(res, 'YEAR'))
            _self.reportData = res
            _self.v_reportData = res[0]
            _self.moreQuarterFor = 3 - res.length
          }
        })
    }
  }
}
</script>

<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
.report-direct {
  display: flex;
  border-top: 2px solid $black;
  background-color: $white;
  @include contentWidth($width: 1200px);
  @include shadow();
  li {
    cursor: pointer;
    position: relative;
    width: 33.33%;
    padding: 74px 76px 74px 60px;
    p {
      position: relative;
      padding-left: 44px;
      font-size: 20px;
      line-height: 29px;
      font-weight: 500;
      color: $black3;
      @each $obj in report01, report02, report03 {
        &.#{$obj} {
          @include bgImg(icon/icon_#{$obj}, $pos: left center);
        }
      }
    }
    .link {
      display: inline-block;
      position: absolute;
      right: 50px;
      top: 50%;
      width: 26px;
      height: 21px;
      transform: translateY(-50%);
      @include bgImg(bg/bg_more_right);
    }
    & + li {
      border-left: 1px solid #e9eaec;
    }
  }
  & + .tab-section {
    margin-top: 110px;
  }
}
@media screen and (max-width: 1000px) {
  .report-wrap {
    .tab-section {
      .select {
        display: none;
      }
    }
  }
  .report-direct {
    display: block;
    li {
      width: 100%;
      padding: 30px;
      & + li {
        border-top: 1px solid #e9eaec;
      }
      p {
        padding-left: 30px;
        font-size: 12px;
        background-size: auto 20px;
      }
      .link {
        width: 16px;
        height: 15px;
        right: 30px;
        background-size: cover;
      }
    }
    & + .tab-section {
      margin-top: 54px;
    }
  }
  .material-list {
    .material {
      padding: 20px 30px;
      .icon-file {
        display: none;
      }
      .material-title {
        font-size: 14px;
        line-height: 30px;
      }
      .link {
        width: 15px;
        height: 14px;
        background-size: cover;
      }
    }
  }
}
</style>
