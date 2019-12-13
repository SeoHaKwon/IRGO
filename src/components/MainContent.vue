<template>
  <div class="main-contents">
    <div class="board-wrap">
      <div class="board left">
        <div class="board-title">
         <strong class="en"> 
            Performance<br>
            Presentation
         </strong>
          <p>실적발표</p>
        </div>
        <div class="sub-txt">
          <strong class="sub-tit">Q 실적발표 자료</strong>
          <p class="date">2019.10.20</p>
          <a href="#" class="more"></a>
        </div>
      </div>
      <div class="board right">
        <div class="board-title">
          <strong class="en">
            Investor Relation<br>
            News
         </strong>
          <p>IR 뉴스</p>
        </div>
        <div class="sub-txt">
          <strong class="sub-tit">에스에프에이, 2차전지용 In-Line 3차원 CT 검사...</strong>
          <p class="date">2019.10.20</p>
          <a href="#" class="more"></a>
        </div>
      </div>
    </div>
    <div class="middle-visual">
      <img src="../assets/images/img/img_main_middle.png" alt="">
      <div class="schedule-box">
        <strong class="tit">IR 일정 <a href="" class="more is_pc"></a></strong>
        <div class="sub-txt">
          <strong>웅진코웨이,2019년 3분기 실적 리뷰...</strong>
          <p>일시:2019년 9월 12일</p>
        </div>
      </div>
    </div>
    <div class="direct-link">
      <ul>
        <li>
          <a href="#" class="link01">
            <strong class="tit">재무정보</strong>
            <p class="sub">기업재무정보</p>
          </a>
        </li>
        <li>
          <a href="#" class="link02">
            <strong class="tit">주주현황</strong>
            <p class="sub">주주구성 및 배당</p>
          </a>
        </li>
        <li>
          <a href="#" class="link03">
            <strong class="tit">공시</strong>
            <p class="sub">기업 공시정보</p>
          </a>
        </li>
        <li>
          <a href="#" class="link04">
            <strong class="tit">경영보고서</strong>
            <p class="sub">경영보거서 다운로드</p>
          </a>
        </li>
        <li>
          <a href="#" class="link05">
            <strong class="tit">IR Contact</strong>
            <p class="sub">다운로드 및 기업정보</p>
          </a>
        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      Footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
.main-contents {
  position:relative;
  z-index: 10;
  @include contentWidth();
  background-color:$white;
  .board-wrap {
    display:flex;
    padding:92px 100px;
    margin-top:-122px;
    .board {
      position:relative;
      width:calc(50% - 100px);
      & + .board {
        position:relative;
        margin-left:200px;
        &::after {
          position:absolute;
          left:-100px;
          top:0;
          width:1px;
          height:100%;
          content:"";
          background-color: #ececec;
        }
      }
    }
    .board-title {
      font-size:31px;
      line-height:36px;
      color:$black3;
      strong {
      font-weight: 700;
      }
      p {
        margin-top:16px;
        font-size:17px;
        line-height:18px;
        color:$gray8;
        font-weight: 500;
      }
    }
    .sub-txt {
      position:relative;
      margin-top:54px;
      padding-left:50px;
      text-align: right;
      .sub-tit {
        font-size:18px;
        color:$black4;
        font-weight: 700;
      }
      .date {
        margin-top:16px;
        font-size:16px;
        color:$gray8;
      }
      .more {
        position:absolute;
        left:0;
        bottom:0;
      }
    }
  }
  .middle-visual {
    position:relative;
    overflow: hidden;
    img {
      position:relative;
      left:50%;
      width:1580px;
      transform: translateX(-50%);
    }
    .schedule-box {
      position: absolute;
      right:90px;
      top:50%;
      padding:80px;
      width:595px;
      height:309px;
      transform: translateY(-50%);
      background:url(../assets/images/bg/bg_board_top.png) ,url(../assets/images/bg/bg_board_bottom.png);
      background-repeat:no-repeat , no-repeat;
      background-position:left top , right bottom;
      background-color:$white;
      .tit {
        display:flex;
        font-size:22px;
        color:$black3;
        font-weight: 700;
      }
      .sub-txt {
        padding-top:80px;
        padding-left:100px;
        @include bgImg(icon/icon_cal,$pos:left bottom);
        strong {
          font-size:18px;
          color:$black4;
          font-weight: 700;
        }
        p {
          margin-top:18px;
          font-size:16px;
          color:$gray8;
        }
      }
      .more {
      margin-left:auto;
      }
    }
  }
  .more {
    display:inline-block;
    width:38px;
    height:38px;
    @include bgImg(btn/btn_board_more);
  }
  .direct-link {
    padding:122px 100px 120px 100px;
    background-color:$white;
    ul {
      display:flex;
      li {
        width:calc(100%/5);
        a {
          display:block;
          padding:8px 0 10px 110px;
          $total: 5;
          @for $i from 1 through $total {
            &.link0#{$i} {
              @include bgImg(icon/icon_link0#{$i}, $pos:left center);
            }
          }
        }
        strong {
          font-size:21px;
          color:$black3;
          font-weight: 500;
        }
        p {
          margin-top:10px;
          font-size:15px;
          color:$gray8;
        }
      }
    }
  }
}
@media screen and (max-width: 1400px) {
  .main-contents{
    .direct-link {
      ul {
        li {
          a {
            padding-left:86px;
          }
          strong {
            font-size:18px;
          }
          p {
            font-size:12px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .main-contents  {
    .board-wrap {
      padding:0;
      flex-wrap: wrap;
      .board {
        width:100%;
        padding:40px 30px;
        &.left {
          background-color:#f7f7f8;
        }
        & +.board {
          margin-left:0;
        }
        .board-title {
          font-size:19px;
          line-height:20px;
          p {
            margin-top:10px;
            font-size:12px;
          }
        }
      }
      .sub-txt {
        margin-top:30px;
        .sub-tit {
          font-size:12px;
        }
        .date{
          margin-top:7px;
          font-size:10px;
        }
      }
    }
    .more {
      width:25px;
      height:25px;
      background-size:25px auto;
    }
    .middle-visual {
      img {
        width:1047px;
      }
      .schedule-box{
        width:calc(100% - 60px);
        height:calc(100% - 160px);
        padding:40px 30px;
        left:30px;
        top:80px;
        right: auto;
        transform: none;
        background-size:140px auto;
        .tit {
          margin-bottom:36px;
          font-size:17px;
          align-items: center;
        }
        .sub-txt {
          padding-top:0;
          padding-left:87px;
          background-size:35px auto;
          background-position:left 40px center;
          strong {
            display:inline-block;
            font-size:12px;
            line-height:14px;
          }
          p {
            margin-top:2px;
            font-size:12px;
          }
        }
        .more {
          width:3px;
          height:6px;
          margin-left:9px;
          @include bgImg(btn/btn_board_more_m);
          background-size:3px 6px;
        }
      }
    }
    .direct-link {
      padding:50px 30px;
      ul {
        flex-wrap: wrap;
        justify-content: center;
        margin-left:-20px;
        margin-top:-45px;
        li {
          width:calc(33.33% - 20px);
          margin-left:20px;
          margin-top:45px;
          &:nth-child(3) ~ li{
            display:inline-block;
              width:auto;
          }
          a {
            padding-left:37px;
            background-size:30px auto;
          }
          strong {
            font-size:11px;
          }
          p {
            margin-top:0;
            font-size:9px;
          }
        }
      }
    }
  }
}
</style>
