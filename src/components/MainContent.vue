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
      </div>
      <div class="board right">
        <div class="board-title">
          <strong class="en">
            Performance<br>
            Presentation
         </strong>
          <p>실적발표</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "@/style/_mixin.scss";
  .main-contents {
    position:relative;
    top:-122px;
    @include contentWidth();
    background-color:$white;
    .board-wrap {
      display:flex;
      padding:92px 100px;
      .board {
        flex:1 1 auto;
        & + .board {
          margin-left:100px;
          padding-left:100px;
          border-left:1px solid #ececec;
        }
      }
      .board-title {
        font-size:31px;
        line-height:36px;
        color:$black3;
        font-weight: 900;
        p {
          margin-top:16px;
          font-size:17px;
          line-height:18px;
          color:$gray8;
          font-weight: 700;
        }
      }
    }
  }
  
</style>
