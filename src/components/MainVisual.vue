<template>
  <div class="main-visual">
    <img src="../assets/images/img/img_visual.png" alt="메인 비주얼">
    <div class="visual-text">
      <div class="inner">
        <div class="status-info">
          <p class="price">
            <span>13,750</span>
           </p>
          <dl>
            <dt>전일 대비</dt>
            <dd class="up">750</dd>
          </dl>
          <dl>
            <dt>등락률</dt>
            <dd>+ 5.73%</dd>
          </dl>
          <dl>
            <dt>시가총액</dt>
            <dd>1,800억</dd>
          </dl>
        </div>
        <div class="icon-scroll">
          Scroll Down
        </div>
        <strong class="en visual-title">
          INVESTOR<br>
          RELATIONS
        </strong>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
  .main-visual {
    position: relative;
    overflow: hidden;
    img {
      position:relative;
      left:50%;
      transform: translateX(-50%);
      width:1920px;
    }
    .visual-text {
      position:absolute;
      left:0;
      bottom:0;
      width:100%;
      padding-bottom:170px;
      .inner {
        position:relative;
        display:flex;
        @include contentWidth();
        .icon-scroll {
          position: absolute;
          left:50%;
          bottom:0;
          padding-top:53px;
          font-size:13px;
          color:#8c8c90;
          @include bgImg(bg/bg_mouse,$pos:center top);
          transform: translateX(-50%);
        }
      }
      .visual-title {
        position:relative;
        display:inline-block;
        padding-top:27px;
        margin-right:auto;
        font-size:93px;
        line-height:105px;
        color:$white;
        font-weight:900;
        &::after {
          @include virtual();
          width:54px;
          height:2px;
          background-color:$white;
        }
      }
      .status-info {
        position:absolute;
        right:0;
        bottom:0;
        .price {
          text-align: right;
          span{
            display: inline-block;
            padding-left:31px;
            margin-bottom:52px;
            color:$white;
            font-size:32px;
            font-weight: 900;
            @include bgImg(bg/bg_dollar,$pos:left bottom);
          }
        }
        dl {
          position:relative;
          padding-right:89px;
          dt {
            font-size:14px;
            line-height:16px;
            color:#818284;
            text-align: right;
          }
          dd {
            position:absolute;
            right:0;
            top:0;
            font-size:14px;
            line-height:16px;
            color:$white;
            &.up {
              padding-left:20px;
              @include bgImg(bg/bg_up,$pos:left bottom);
            }
          }
          & + dl {
            margin-top:17px;
          }
        }
      }
    }
  }
</style>
