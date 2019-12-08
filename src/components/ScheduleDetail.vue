<template>
  <div class="detail-section">
    <div class="detail-title">
      <p>삼성전자 기업설명회(IR) 개최(2019.3Q)</p>
    </div>
    <div class="datail-inner">
      <div class="top-section">
        <dl class="files">
          <dt>첨부파일</dt>
          <dd class="icon-file pdf">시장조사기관 IDC 보고서 .pdf <button type="button" class="file-down"></button></dd>
        </dl>
        <div class="sns-group">
          <a href="#" class="facebook"></a>
          <a href="#" class="twitter"></a>
          <a href="#" class="blog"></a>
          <a href="#" class="talk"></a>
        </div>
      </div>
      <div class="detail-cont">
        <ul class="list">
          <li>
            <strong class="tit">일시</strong>
            <p class="time en">2019.10.18 ~19 <span class="en">10:00 ~ 11:00</span></p>
          </li>
          <li>
            <strong class="tit">장소</strong>
            <p>본사 사무실, 경기도 수원시 영통구 삼성로 129 (매탄동)</p>
          </li>
          <li>
             <strong class="tit">대상</strong>
            <p>사전 신청 기관투자자</p>
          </li>
        </ul>
        <p class="pic">
          <img src="../assets/images/img/img_detail.png" alt="">
        </p>
      </div>
      <div class="txt-pre">한국전력의 2019년도 3분기 잠정 결산실적발표 컨퍼런스콜 일정이 11월 13일 (수) 에 실시됩니다.</div>
      <div class="list-btn">
        <div class="link-box prev">
          <span>이전글</span>
          <p>SAMSUNG, IR Forum</p>
          <a href="#" class="link"></a>
        </div>
        <div class="link-box next">
          <span>다음글</span>
          <p>SAMSUNG, 회사실적, 전략, 업황 등 주요경영현황(유럽)</p>
          <a href="#" class="link"></a>
        </div>
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
.detail-section {
  padding-bottom:200px;
}
  .detail-title {
    background-color:#f3f3f7;
    p{
      @include contentWidth($width:1200px);
      padding:114px 0 102px 114px;
      font-size:29px;
      line-height:30px;
      color:$black3;
      font-weight: 500;
      @include bgImg(icon/icon_cal,$pos:left center);
    }
  }
  .datail-inner{
    @include contentWidth($width:1200px);
    .top-section {
      display:flex;
      margin:30px 0 60px;
      .sns-group {
        display:flex;
        margin-left:auto;
        a {
          display:inline-block;
          width:25px;
          height:25px;
          @each $obj in facebook,twitter,blog,talk{
            &.#{$obj}{
              @include bgImg(icon/icon_round_#{$obj});
            }
          }
          & + a {
            margin-left:16px;
          }
        }
      }
      .files {
        display:flex;
        align-items: center;
        dt {
          position: relative;
          padding-right:10px;
          margin-right:10px;
          color:#aaa;
          font-size:15px;
          line-height:16px;
          &::after {
            display:block;
            position:absolute;
            right:0;
            top:50%;
            width:1px;
            height:8px;
            margin-top:-4px;
            content:"";
            background-color:#d3d3d5;
          }
        }
        .icon-file {
          position:relative;
          padding:0 26px 0 36px;
          background-position:left center;
          color:$black4;
          .file-down {
            position:absolute;
            right:0;
            top:50%;
            width:17px;
            height:17px;
            transform: translateY(-50%);
            @include bgImg(btn/btn_file_down);
            background-color:$white;
          }
        }
      }
    }
    .detail-cont {
      border:1px solid #e9e9ee;
      border-top:2px solid $black;
      box-shadow: 3px 3px 9px 5px #ededed;
      margin-bottom:90px;
      .list {
        padding:90px 104px;
        li {
          display:flex;
          align-items: flex-start;
          & + li {
            margin-top:26px;
            padding-top:22px;
            border-top:1px solid #f2f2f2;
          }
          .tit {
            font-weight:500;
            font-size:20px;
            line-height:26px;
            color:$gray8;
          }
          p {
            position:relative;
            padding-left:30px;
            margin-left:30px;
            font-weight: 500;
            font-size:20px;
            line-height:26px;
            color:$black3;
            &::after {
              display:block;
              position:absolute;
              left:0;
              top:50%;
              width:1px;
              height:11px;
              background-color:#cbcbcb;
              transform: translateY(-50%);
              content:"";
            }
            &.time {
              font-size:26px;
              font-weight:700;
              color:$blue;
              span {
                display:inline-block;
                margin-left:14px;
                font-size:16px;
                line-height:26px;
                color:#1e83ea;
              }
            }
          }
        }
      }
      .pic {
        padding:0 34px 34px 34px;
        overflow: hidden;
        img {
          position: relative;
          width:1130px;
          left:50%;
          margin-left:-565px;
        }
      }
    }
    .list-btn {
      .link-box {
        position:relative;
        padding:46px 70px 46px 0;
        display:flex;
        border-top:1px solid #ececec;
        align-items: center;
        span {
          display:inline-block;
          width:128px;
          font-size:14px;
          text-align: center;
          color:#a9acb3;
        }
        .link{
            position: absolute;
            right: 30px;
            top: 50%;
            width: 9px;
            height: 17px;
            @include bgImg(bg/bg_board_link);
            transform: translateY(-50%);
          }
        p {
          font-size:20px;
          font-weight: 500;
          color:$black3;
        }
        &.prev {
          span{
            padding-top:16px;
            @include bgImg(arrow/arrow_prev,$pos:center top);
          }
        }
        &.next {
            span{
            padding-bottom:16px;
            @include bgImg(arrow/arrow_next,$pos:center bottom);
          }
        }
      }
      border-bottom:1px solid #ececec;
      
    }
  }
</style>
