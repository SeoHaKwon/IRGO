<template>
  <div class="announcement-Tab">
    <div class="tab-section">
      <div class="select">
        <span class="selected">2019</span>
        <ul class="select-list">
          <li>
            <a href="#">2019</a>
          </li>
        </ul>
      </div>
      <div class="tabs">
        <button type="button" class="tab active">1Q</button> <!--클래스 active 주시면 활성화됩니다.-->
        <button type="button" class="tab">2Q</button>
        <button type="button" class="tab">3Q</button>
        <button type="button" class="tab">4Q</button>
      </div>
    </div>
    <div class="tab-cont active"> <!--클래스 active 주시면 활성화됩니다.-->
      <div class="material-top">
        <div class="thumbnail">
            <img src="../assets/images/img/img_material_thumbnail.png" alt="">
        </div>
        <div class="material-box">
          <div class="info">
            <span class="date">2019. 1Q</span>
            <p class="title">실적발표자료</p>
            <a href="#" class="icon-file pdf">SAMSUNG 19년 2부누기 실절발표자료</a>
          </div>
        </div>
      </div>
      <div class="material-list">
        <div class="material">
          <strong class="material-title">보도자료</strong>
          <a href="#" class="icon-file  pdf">
            SAMSUNG 19년 2부누기 실절발표자료
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">Webcast</strong>
            <a href="#" class="link mov">MOV</a>
        </div>
        <div class="material">
          <strong class="material-title">컨퍼런스콜</strong>
          <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">스크립트</strong>
          <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">Fact sheet</strong>
          <a href="#" class="icon-file excel">
            SAMSUNG 19년 2부누기 실절발표자료
          </a>
          <a href="#" class="link"></a>
        </div>
      </div>
    </div>
    <div class="tab-cont">
      
    </div>
    <div class="tab-cont">
      
    </div>
    <div class="tab-cont">
      
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
 .announcement-Tab {
   @include contentWidth(1200px);
 }
 .material-top {
   display:flex;
   border-top:1px solid $black;
   .thumbnail {
     overflow: hidden;
     width:50%;
     img {
       position: relative;
       left:50%;
       width: 600px;
       margin-left:-300px;
     }
   }
   .material-box {
     width:50%;
     padding:80px 60px 0 60px;
     background:url(../assets/images/bg/bg_board_top.png) ,url(../assets/images/bg/bg_board_bottom.png);
     background-repeat:no-repeat , no-repeat;
     background-position:left top , right bottom;
     background-color:$white;
     .info {
       @include bgImg(icon/icon_material,$pos:right top 46px);
     }
     .date {
       font-size:19px;
       color:#bcc0ca;
       font-weight: 700;
     }
     .title {
       margin-top:16px;
       font-size:27px;
       color:#393f44;
       font-weight: 500;
     }
     .icon-file  {
       margin-top:70px;
     }
   }
   & + .material-list  {
     margin-top:10px;
   }
 }
</style>
