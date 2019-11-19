<template>
  <div class="FooterBody">
    <div class="footer-container">
      <div class="footer-informaition">
        <div class="footer-informaition-contents">
          <h5 class="title">Contact</h5>
          <div class="description">
            <h6>T. 02-2118-2020</h6>
            <h6>E. ir@lgdisplay.co.kr</h6>
          </div>
        </div>
        <div class="footer-informaition-contents">
          <h5 class="title">Link</h5>
          <div class="description">
            <h6><a>블로그</a></h6>
            <h6><a>페이스북</a></h6>
            <h6><a>유튜브</a></h6>
          </div>
          <div class="description">
            <h6><a>유튜브</a></h6>
            <h6><a>OLED SPACE(자체채널)</a></h6>
            <h6><a>유튜브</a></h6>
          </div>
        </div>
      </div>
      <div class="footer-copy-right">
        Copyright 2019.companyCo.,Ltd.All rights reserved
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterBody',
  components: {
  }
}
</script>
<style lang="scss">
.FooterBody {
  background: #2F2F2F;
  padding: 120px 0 60px 0;

  .footer-container {
    width: 1150px;
    margin: 0 auto;
    color: #ffffff;
  }

  .footer-informaition-contents {
    flex-basis: 50%;
    display: flex;
    justify-content: left;
    padding-bottom: 50px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255, 0.5)


  }

  .footer-informaition {
    display: flex;
    justify-content: space-between;

    & .title {
      font-size: 28px;
      font-weight: bold;
      margin-right: 72px;
    }
    & .description {
      font-size: 23px;
      margin-right: 72px;

      & h6 {
        margin-bottom: 20px;
        opacity: 0.5;
      }
    }
  }

  .footer-copy-right {
    font-size: 13px;
    opacity: 0.5;
  }
  @media (min-width: 900px) and (max-width: 1149px) {
    .footer-container {
      width: 900px;
    }
  }
  @media ( max-width: 899px ) {
    background: #2F2F2F;
    padding: 60px 15px;

    .footer-container {
      width: 100%;
      margin: 0 auto;
      color: #ffffff;
    }

    .footer-informaition-contents {
      flex-basis: 50%;
      display: flex;
      justify-content: left;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 0


    }

    .footer-informaition {
      display: block;
      justify-content: space-between;

      & .title {
        font-size: 20px;
        font-weight: bold;
        margin-right: 20px;
        flex-basis: 30%;
      }
      & .description {
        font-size: 18px;
        margin-right: 20px;

        & h6 {
          margin-bottom: 20px;
          opacity: 0.5;
        }
      }
    }

    .footer-copy-right {
      font-size: 11px;
      opacity: 0.5;
    }
  }
}
</style>
