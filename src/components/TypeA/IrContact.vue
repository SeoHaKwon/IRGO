<template>
  <div class="contant-wrap">
    <div class="contact-section">
      <p class="title-wrap"><strong>IR Team</strong></p>
      <div class="company-info">
        <p class="call en">{{ IRO_TEL }}</p>
        <p class="email en">{{ IRO_EMAIL }}</p>
        <p class="address">
          {{ IR_ADDR }}
        </p>
      </div>
    </div>
    <div class="contact-section" v-if="false">
      <p class="title-wrap"><strong>IR 전용 App</strong></p>
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
        <a :href="facebook_url" class="facebook" v-if="facebook_url"></a>
        <a :href="insta_url" class="instagram" v-if="insta_url"></a>
        <a :href="twitter_url" class="twitter" v-if="twitter_url"></a>
        <a :href="youtube_url" class="youtube" v-if="youtube_url"></a>
        <a href="#" class="blog"></a>
        <a :href="naver_url" class="naver" v-if="naver_url"></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      IR_ADDR: '',
      IRO_EMAIL: '',
      IRO_TEL: '',
      naver_url: '',
      facebook_url: '',
      twitter_url: '',
      insta_url: '',
      youtube_url: ''
    }
  },
  computed: {
    ...mapGetters(['getCompSeq'])
  },
  watch: {
    getCompSeq () {
      const _self = this
      _self.getIRData()
    }
  },
  methods: {
    getIRData () {
      const _self = this
      const param = {
        seq: _self.getCompSeq
      }
      _self.$store.dispatch('GET_CONTACT', param)
        .then(res => {
          _self.IR_ADDR = res[0].IR_ADDR
          _self.IRO_EMAIL = res[0].IRO_EMAIL
          _self.IRO_TEL = res[0].IRO_TEL
          _self.naver_url = res[0].IRPAGE_SNS_BLOG
          _self.facebook_url = res[0].IRPAGE_SNS_FACEBOOK
          _self.twitter_url = res[0].IRPAGE_SNS_TWITTER
          _self.insta_url = res[0].IRPAGE_SNS_INSTA
          _self.youtube_url = res[0].IRPAGE_SNS_YOUTUBE
        })
    }
  },
  mounted () {
    const _self = this
    if (_self.getCompSeq) {
      _self.getIRData()
    }
  }
}
</script>

<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
.gray-bg {
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    display: inline-block;
    width: 100%;
    height: 321px;
    background-color: #f3f3f7;
  }
}
.contact-section {
  & + .contact-section {
    margin-top: 140px;
  }
}
.app-download {
  display: flex;
  .app-box {
    width: calc(50% - 5px);
    padding: 66px 60px;
    border: 1px solid #e5e5e5;
    border-top: 2px solid $black;
    & + .app-box {
      margin-left: 10px;
    }
  }
  .txt-box {
    position: relative;
    padding-left: 70px;
    @each $obj in google, apple {
      &.#{$obj} {
        @include bgImg(icon/icon_#{$obj}, $pos: left center);
      }
    }
    .app-tit {
      font-size: 20px;
      font-weight: 500;
      color: $black3;
    }
    p {
      margin-top: 10px;
      font-size: 16px;
      font-weight: 500;
      color: $gray8;
    }
    .link {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      width: 22px;
      height: 25px;
      margin-left: auto;
      @include bgImg(bg/bg_more_bottom);
    }
  }
}
.contant-wrap {
  position: relative;
  z-index: 5;
  @include contentWidth($width: 1200px);
  .company-info {
    display: flex;
    flex-wrap: wrap;
    padding: 90px 100px;
    border-top: 2px solid $black;
    background-color: $white;
    @include shadow();
    p {
      width: 50%;
      padding-left: 44px;
      font-size: 20px;
      line-height: 23px;
      color: $black3;
      font-weight: 500;
      @each $obj in call, email, address {
        &.#{$obj} {
          @include bgImg(icon/icon_#{$obj}, $pos: left bottom);
        }
      }
      &.address {
        width: 100%;
        padding-top: 34px;
        margin-top: 34px;
        border-top: 1px solid #f3f3f7;
      }
    }
  }
  .sns-list {
    display: flex;
    padding: 66px 0;
    justify-content: center;
    border: 1px solid #e5e5e5;
    border-top: 2px solid $black;
    a {
      display: inline-block;
      width: 60px;
      height: 60px;
      @each $obj in facebook, instagram, twitter, youtube, blog, naver {
        &.#{$obj} {
          @include bgImg(icon/icon_#{$obj});
        }
      }
      & + a {
        margin-left: 104px;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .contant-wrap {
    .company-info {
      padding: 50px 30px;
      border-top-width: 2px;
      p.email,
      p.call,p {
        width: 100%;
        padding-left: 25px;
        font-size: 13px;
        line-height: 20px;
        background-size: auto 12px;
        background-position: left center;
        &.address {
          padding-top: 0px;
          margin-top: 40px;
          background-position: left center;
          border-top: none;
        }
        & + p {
          position: relative;
          margin-top: 40px;
          &::after {
            display: block;
            content: "";
            position: absolute;
            left: 0;
            top: -20px;
            width: 100%;
            height: 1px;
            background-color: #f3f3f7;
          }
        }
      }
    }
    .sns-list {
      padding: 10px 0 45px 0;
      justify-content: cener;
      flex-wrap: wrap;
      border-top-width: 2px;
      a {
        width: 33.33%;
        margin-top: 35px;
        background-size: cover;
        background-size: 32px 32px;
        & + a {
          margin-left: 0;
        }
      }
    }
  }
  .contact-section {
    & + .contact-section {
      margin-top: 70px;
    }
  }
  .app-download {
    display: block;
    .app-box {
      width: 100%;
      padding: 30px;
      border-top-width: 2px;
      .txt-box {
        padding-left: 40px;
        background-size: auto 25px;
        strong {
          display: inline-block;
          font-size: 16px;
        }
        p {
          margin-top: 5px;
          font-size: 10px;
        }
        .link {
          width: 16px;
          height: 15px;
          transform: rotate(-90deg);
          background-size: cover;
        }
      }
      & + .app-box {
        margin-left: 0;
        border-top:none;
      }
    }
  }
}
</style>
