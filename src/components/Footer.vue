<template>
  <div class="footer-wrap">
    <div class="footer">
      <h2 class="logo">
        <img src="../assets/images/logo/logo_footer.png" alt="로고">
      </h2>
      <ul class="foot-info">
        <li><span>㈜ 회사명</span></li>
        <li><span>대표자</span><span>홍길동</span></li>
        <li><span>주소</span><span>서울특별시 성동구 성수일로 10 서울숲 ITCT</span></li>
        <li><span>Tel</span><span>02-000-0000</span></li>
        <li><span>Fax</span><span>02-000-0000</span></li>
      </ul>
      <p class="copy">Copyright 2019. company Co., Ltd. All rights reserved.</p>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
 .footer-wrap{
   padding:58px 0;
   background-color:#f3f3f7;
   .footer {
     @include contentWidth($width:684px);
     .logo {
       text-align: center;
       padding-bottom:17px;
       margin-bottom:15px;
       border-bottom:1px solid #d9d9e2;
     }
   }
   .foot-info {
     display:flex;
     li {
       display:flex;
       & + li {
         padding-left:8px;
         margin-left:8px;
         border-left:1px solid #cdcdd0;
       }
       span {
         font-size:13px;
         font-weight: 700;
         color:$gray7;
         & + span {
           margin-left:8px;
         }
       }
     }
   }
   .copy {
     margin-top:14px;
     text-align: center;
     font-size:13px;
     color:#b3b3b3;
   }
 }
</style>
