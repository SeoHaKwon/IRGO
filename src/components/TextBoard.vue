<template>
  <div class="board-section">
    <p class="title-wrap">
      <strong>지난일정</strong>
    </p>
    <ul class="list">
      <li>
        <strong class="board-title">
          SAMSUNG, IR Forum
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
      <li>
        <strong class="board-title">
          SAMSUNG, 회사실적, 전략, 업황 등 주요경영현황(유럽)
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
      <li>
        <strong class="board-title">
          clsa증권, IR Forum
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
      <li>
        <strong class="board-title">
          SAMSUNG,Citi Tech 및 GEM 컨퍼런스 참석 (뉴욕)
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
      <li>
        <strong class="board-title">
          2018년 3분기 경영실적발표(국내)
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
      <li>
        <strong class="board-title">
          SAMSUNG, 회사실적, 전략, 업황 등 주요경영현황(유럽)
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
      <li>
        <strong class="board-title">
          2017년 4분기 경영실적발표(국내)
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
      <li>
        <strong class="board-title">
          2017년 3분기 경영실적발표(국내)
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
      <li>
        <strong class="board-title">
          SAMSUNG, IR Forum
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
      <li>
        <strong class="board-title">
          2017년 2분기 경영실적발표(국내)
        </strong>
        <span class="day">19. 10. 22</span>
        <a href="" class="link"></a>
      </li>
    </ul>
    <div class="btn-wrap center">
      <button type="button" class="btn_more">
        <span>more</span>
      </button>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
//layout
.sub-wrap {
  .title-wrap {
    margin-bottom: 40px;
    strong {
      font-size: 30px;
      color: $black3;
      font-weight: 700;
    }
  }
}

//tabs
.tab-section {
  display: flex;
  @include contentWidth($width: 1200px);
  margin-bottom: 50px;
  box-shadow: 3px 3px 2px 0px #dbdbdf;
  .select {
    flex: 0 0 auto;
    max-width: 246px;
  }
  .tabs {
    display: flex;
    flex: 1 1 auto;
    .tab {
      position: relative;
      flex: 1 1 auto;
      text-align: center;
      background-color: $white;
      font-size: 15px;
      line-height: 16px;
      font-weight: 700;
      color: #bcc0ca;
      &.active {
        color: $blue;
        &::after {
          display: block;
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 80px;
          height: 3px;
          margin-left: -40px;
          background-color: $blue;
          content: "";
        }
      }
    }
  }
}

.tab-cont {
  @include contentWidth($width: 1200px);
  display: none;
  &.active {
    display: block;
  }
}

//select
.select {
  width: 100%;
  position: relative;
  height: 60px;
  background-color: $blue;
  .selected {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    font-size: 15px;
    line-height: 60px;
    font-weight: 700;
    color: $white;
    cursor: pointer;
    @include bgImg(arrow/arrow_select, $pos: right 20px center);
    &.txt {
      background-image: none;
      cursor: default;
    }
  }
  .select-list {
    display: none;
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    a {
      display: block;
    }
    &.on {
      display: block;
    }
  }
}

//file
.icon-file {
  display: inline-block;
  padding-right: 37px;
  font-size: 15px;
  line-height: 27px;
  color: #9b9da1;
  @each $obj in excel, pdf {
    &.#{$obj} {
      @include bgImg(icon/icon_#{$obj}, $pos: right center);
    }
  }
}

//btn
.btn-wrap {
  display: flex;
  margin-top: 50px;
  &.center {
    justify-content: center;
  }
  .btn_more {
    width: 200px;
    padding: 22px;
    font-size: 15px;
    line-height: 16px;
    color: #b9c0ce;
    border: 3px solid #ebeef4;
    background-color: #fff;
    span {
      display: inline-block;
      padding-right: 22px;
      @include bgImg(arrow/arrow_more, $pos: right center);
    }
  }
}

.content-bottom {
  background-color: $white;
  padding: 110px 0 175px 0;
}
.content-top {
  padding: 110px 0 130px 0;
  background-color: #f3f3f7;
}
//board-style
.board-section {
  @include contentWidth($width: 1200px);
  .list {
    border-top: 2px solid $black3;
    li {
      display: flex;
      position: relative;
      align-items: center;
      padding: 38px 70px 38px 30px;
      border-bottom: 1px solid #ececec;
      .board-title {
        font-size: 20px;
        line-height: 30px;
        color: $black3;
        font-weight: 500;
        letter-spacing: -0.7px;
      }
      .day {
        margin-left: auto;
        font-size: 16px;
        color: #a9acb3;
      }
      .link {
        position: absolute;
        right: 30px;
        top: 50%;
        width: 9px;
        height: 17px;
        @include bgImg(bg/bg_board_link);
        transform: translateY(-50%);
      }
    }
    &.qa {
      li {
        .board-title {
          display: inline-block;
          padding-left: 60px;
          @include bgImg(bg/bg_qa_q, $pos: left center);
        }
      }
    }
    &.thumbnail {
      .thumbnail-img {
        margin-right: 40px;
      }
      .thumbnail-txt {
        .category {
          margin-bottom: 8px;
          font-size: 16px;
          font-weight: 500;
          color: #a9acb3;
        }
      }
    }
  }
}

//material
.material-list {
  .material {
    display: flex;
    align-items: center;
    padding: 40px 60px;
    background-color: $white;
    & + .material {
      margin-top: 2px;
    }
    .material-title {
      display: inline-block;
      flex: 1 1 auto;
      max-width: 166px;
      font-size: 23px;
      line-height: 24px;
      color: $black3;
      font-weight: 500;
    }
    .link {
      display: inline-block;
      width: 24px;
      height: 21px;
      margin-left: auto;
      @include bgImg(bg/bg_more_right);
      &.mov {
        padding-right: 26px;
        width: auto;
        height: auto;
        font-size: 13px;
        line-height: 26px;
        color: #bcc0ca;
        @include bgImg(bg/bg_play, $pos: right center);
      }
    }
  }
  &.report {
    .material {
      .material-title {
        max-width: 232px;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .sub-wrap {
    .title-wrap {
      margin-bottom: 25px;
      strong {
        font-size: 20px;
      }
    }
  }
  .content-top,
  .content-bottom {
    padding: 60px 30px;
  }
  .select {
    height: 45px;
    .selected {
      padding: 0 15px;
      font-size: 9px;
      line-height: 45px;
      background-size: 7px 4px;
    }
  }
  .tab-section {
    margin-bottom: 20px;
    .select {
      max-width: 80px;
    }
    .tabs {
      .tab {
        font-size: 10px;
        height: 45px;
        &.active {
          &::after {
            width: 40px;
            height: 2px;
            margin-left: -20px;
          }
        }
      }
    }
  }
  .board-section {
    .list {
      li {
        display: block;
        padding: 26px 15px;
        .board-title {
          display: inline-block;
          width: 100%;
          margin-bottom: 6px;
          font-size: 14px;
          line-height: 18px;
        }
        .day {
          font-size: 11px;
        }
        .link {
          right: 20px;
        }
      }
    }
  }
  .btn-wrap {
    margin-top: 30px;
    .btn_more {
      width: 150px;
      padding: 12px 0;
      span {
        padding-right: 14px;
        font-size: 12px;
        background-size: 8px auto;
      }
    }
  }
}
</style>
