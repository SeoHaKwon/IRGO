<template>
  <div class="sub-visual">
    <img src="../assets/images/img/img_sub_visual.png" alt="">
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
 .sub-visual-wrap {
   position:relative;
   .sub-visual {
     overflow: hidden;
     img {
       position:relative;
       left:50%;
       width:1920px;
       margin-left:-960px;
     }
   }
   .inner {
     @include contentWidth($width:1200px);
     display:flex;
   }
   .sub-title {
     display:flex;
     align-items: flex-end;
     position:relative;
     padding-top:18px;
     font-size:56px;
     line-height:58px;
     color:$white;
     font-weight: bold;
      &::after {
        @include virtual();
        width:54px;
        height:2px;
        background-color:$white;
       }
       span {
         display:inline-block;
         padding-left:30px;
         margin-left:30px;
         font-weight: 700;
         font-size:30px;
         line-height:32px;
         color:$white;
         @include bgImg(arrow/arrow_2depth,$pos:left center);
       }
    }
   .sub-info-txt {
     position:absolute;
     width:100%;
     bottom:50px;
   }
   .history{
     display:flex;
     align-items: flex-end;
     margin-left:auto;
     .icon-home {
       display:inline-block;
       padding-right:27px;
       margin-right:21px;
       @include bgImg(arrow/arrow_history ,$pos:right center);
     }
     span {
       font-size:14px;
       line-height:18px;
       color:$white;
     }
   }
 }
  @media screen and (max-width: 1000px) {
     .sub-visual-wrap {
       .sub-visual {
         img {
           width:1200px;
           margin-left:-600px;
         }
       }
       .sub-info-txt {
         padding:0 30px;
         .sub-title {
           padding-top:15px;
           font-size:38px;
           line-height:40px;
           &::after {
             width:25px;
             height:2px;
           }
         }
       }
       .history {
         .icon-home {
            padding-right: 10px;
            margin-right:10px;
            line-height: 0;
            background-size:5px auto;
           img {
             width:14px;
           }
         }
         span {
           font-size:12px;
         }
       }
     }
  }
</style>
