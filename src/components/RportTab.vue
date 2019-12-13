<template>
  <div class="report-wrap">
    <ul class="report-direct">
      <li>
        <p class="report01">정관</p>
        <a href="#" class="link"></a>
      </li>
      <li>
        <p class="report02">기업지배구조보고서</p>
        <a href="#" class="link"></a>
      </li>
      <li>
        <p class="report03">공시정보관리규정</p>
        <a href="#" class="link"></a>
      </li>
    </ul>
    <div class="tab-section">
      <div class="select">
        <span class="selected txt">연도별 경영보고서</span>
      </div>
      <div class="tabs">
        <button type="button" class="tab active">2019</button>
        <!--클래스 active 주시면 활성화됩니다.-->
        <button type="button" class="tab">2018</button>
        <button type="button" class="tab">2017</button>
      </div>
    </div>
    <div class="tab-cont active">
      <!--클래스 active 주시면 활성화됩니다.-->
      <div class="material-list report">
        <div class="material">
          <strong class="material-title">사업보고서</strong>
          <a href="#" class="icon-file  pdf">
            SAMSUNG 19년 사업보고서
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">기업지배구조보고서</strong>
          <a href="#" class="icon-file pdf">
            SAMSUNG 19년 기업지배구조보고서
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">지속가능경영보고서</strong>
          <a href="#" class="icon-file  pdf">
            SAMSUNG 19년 지속가능경영보고서
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">연차보고서</strong>
          <a href="#" class="icon-file  pdf">
            SAMSUNG 19년 연차보고서
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">기업지배구조보고서</strong>
          <a href="#" class="icon-file  pdf">
            SAMSUNG 19년 기업지배구조보고서
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">사업보고서</strong>
          <a href="#" class="icon-file  pdf">
            SAMSUNG 19년 사업보고서
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
import SubVisual from "@/components/SubVisual.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "status",
  components: {
    SubVisual,
    Footer
  }
};
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
  }
  & + .tab-section {
    margin-top: 54px;
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
