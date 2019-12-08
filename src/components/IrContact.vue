<template>
  <div class="contant-wrap">
    <div class="contact-section">
      <p class="title-wrap"><strong>IR Team</strong></p>
      <div class="company-info">
        <p class="call en">02-3773-1114</p>
        <p class="email en">jsb@lgdisplay.co kr</p>
        <p class="address">서울시 영등포구 국제금융로 8길 2 농협재단빌딩 14F(여의도동)</p>
      </div>
    </div>
    <div class="contact-section">
      <div class="app-download">
        <div class="app-box">
          <div class="txt-box google">
            <strong class="app-tit en">
              Google play
            </strong>
            <p class="en">Download for Android</p>
            <a href="#" class="link"></a>
          </div>
        </div>
        <div class="app-box">
          <div class="txt-box apple">
            <strong class="app-tit en">
              App Store
            </strong>
            <p class="en">Download for iOS</p>
            <a href="#" class="link"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-section">
      <p class="title-wrap"><strong>SNS</strong></p>
      <div class="sns-list">
        <a href="#" class="facebook"></a>
        <a href="#" class="instagram"></a>
        <a href="#" class="twitter"></a>
        <a href="#" class="youtube"></a>
        <a href="#" class="blog"></a>
        <a href="#" class="naver"></a>
      </div>
    </div>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'status',
  components: {
    SubVisual,
    Footer
  },
}

</script>

<style lang="scss">
  @import "@/style/_mixin.scss";
  .gray-bg {
    position:relative;
    &::after {
      position:absolute;
      left:0;
      top:0;
      content:"";
      display:inline-block;
      width:100%;
      height:321px;
      background-color:#f3f3f7;
    }
  }
  .contact-section {
    & + .contact-section {
      margin-top:140px;
    }
  }
  .app-download {
    display:flex;
    .app-box {
      width:calc(50% - 5px);
      padding:66px 60px;
      border:1px solid #e5e5e5;
      border-top:3px solid $black;
      & + .app-box {
        margin-left:10px;
      }
    }
    .txt-box {
      position: relative;
      padding-left:70px;
      @each $obj in google,apple {
        &.#{$obj}{
          @include bgImg(icon/icon_#{$obj},$pos :left center);
        }
      }
      .app-tit {
        font-size:20px;
        font-weight: 500;
        color:$black3;
      }
      p {
        margin-top:10px;
        font-size:16px;
        font-weight: 500;
        color:$gray8;
      }
      .link {
        position:absolute;
        right:0;
        top:50%;
        transform: translateY(-50%);
        display:inline-block;
        width:22px;
        height:25px;
        margin-left:auto;
        @include bgImg(bg/bg_more_bottom);
      }
    }
  }
  .contant-wrap {
    position:relative;
    z-index: 5;
    @include contentWidth($width:1200px);
    .company-info {
      display:flex;
      flex-wrap:wrap;
      padding:90px 100px;
      border-top:3px solid $black;
      background-color:$white;
      box-shadow:3px 3px 9px 5px #ededed;
      p {
        width:50%;
        padding-left:44px;
        font-size:20px;
        line-height:23px;
        color:$black3;
        font-weight: 500;
        @each $obj in call, email,address {
          &.#{$obj}{
            @include bgImg(icon/icon_#{$obj},$pos:left bottom);
          }
        }
        &.address {
          width:100%;
          padding-top:34px;
          margin-top:34px;
          border-top:1px solid #f3f3f7;
        }
      }
    }
    .sns-list {
      display:flex;
      padding:66px 0;
      justify-content: center;
      border:1px solid #e5e5e5;
      border-top:3px solid $black;
      a {
        display:inline-block;
        width:60px;
        height:60px;
        @each $obj in  facebook, instagram, twitter,youtube,blog,naver {
          &.#{$obj} {
            @include bgImg(icon/icon_#{$obj});
          }
        }
        & + a {
          margin-left:104px;
        }
      }
    }
  }
  
</style>