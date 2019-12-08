<template>
  <div class="news-wrap">
    <ul class="list">
      <li>
        <div class="new-img">
          <img src="../assets/images/img/img_news01.png" alt="">
        </div>
        <div class="news-txt ">
          <span class="category">
            보도자료
          </span>
          <p class="txt">
            삼성전자, 한 해 사회공헌 공모전 성
            과를 공유하는 삼성 투모로우 스...
          </p>
          <span class="date">2019.11.06</span>
          <a href="#" class="link"></a>
        </div>
      </li>
      <li>
        <div class="new-img">
          <img src="../assets/images/img/img_news02.png" alt="">
        </div>
        <div class="news-txt ">
          <span class="category">
            IR자료
          </span>
          <p class="txt">
            삼성 AI 포럼 2019’ 기술 한계 극복을 
            위해 글로벌 전문가 한 자리에
          </p>
          <span class="date">2019.11.06</span>
          <a href="#" class="link"></a>
        </div>
      </li>
      <li class="text-box">
        <div class="news-txt ">
          <span class="category">
            IR자료
          </span>
          <p class="txt">
            삼성미래기술육성재단, 미국 실리콘
            밸리에서 ‘글로벌 리서치 심포지엄’ 
            개최
          </p>
          <span class="date">2019.11.06</span>
          <a href="#" class="link"></a>
        </div>
        <p class="news-bottom-txt">
          삼성미래기술육성재단은 (현지시간) 11월 7
          일부터 8일까지 미국 실리콘밸리에 소재한 
          삼성전자 미주법인에서 글로벌 리서치...
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_mixin.scss";
.news-wrap {
  @include contentWidth($width:1200px);
  .list {
    display:flex;
    li {
      position:relative;
      width:calc(33.33% - 15px);
      box-shadow: 3px 3px 6px 6px #eaeaee;
      background-color:$white;
      & + li {
        margin-left:45px;
      }
      &.text-box {
        .news-txt {
          padding:60px 40px 20px 40px;
          .txt {
            height:75px;
            overflow: hidden;
          }
        }
      }
    }
    .new-img {
      overflow: hidden;
      img {
        position:relative;
        left:50%;
        width:370px;
        margin-left:-185px;
      }
    }
    .news-txt {
      padding:50px 40px;
      background-color:$white;
      .category {
        font-size:15px;
        line-height:16px;
        color:$blue;
        font-weight: 500;
      }
      .txt {
        margin-top:17px;
        font-size:20px;
        line-height:25px;
        color:$black3;
        font-weight: 500;
      }
      .date {
        display:inline-block;
        margin-top:32px;
        font-size:15px;
        line-height:16px;
        color:#a9acb3;
      }
      .link {
        display:inline-block;
        position:absolute;
        right:40px;
        bottom:50px;
        width:24px;
        height:21px;
        @include bgImg(bg/bg_more_right);
      }
    }
    .news-bottom-txt {
      position:relative;
      padding:22px 40px 0 40px;
      font-size:17px;
      line-height:32px;
      color:$gray8;
      letter-spacing: -0.25px;
      &::after {
        @include virtual;
        left:40px;
        width:calc(100% - 80px);
        height:1px;
        background-color:#ebebed;
      }
    }
  }
}
</style>
