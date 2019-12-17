<template>
  <div class="announcement-Tab">
    <div class="tab-section">
      <div class="select">
        <span class="selected" v-on:click="openSelect">2019</span>
        <ul class="select-list" :class="{on:isActive}">
          <li>
            <a href="#">2019</a>
          </li>
            <li>
            <a href="#">2018</a>
          </li>
            <li>
            <a href="#">2017</a>
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
      <div class="material-list">
        <div class="material">
          <strong class="material-title">재무상태</strong>
          <a href="#" class="icon-file  pdf">
            SAMSUNG 19 2Q 재무상태표
          </a>
          <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">손익계산서</strong>
           <a href="#" class="icon-file pdf">
            SAMSUNG 19 2Q 손익계산
          </a>
            <a href="#" class="link"></a>
        </div>
        <div class="material">
          <strong class="material-title">현금흐름표</strong>
           <a href="#" class="icon-file  pdf">
            SAMSUNG 19 2Q 현금흐름표
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
  export default {
    data : () => {
      return {
        isActive : false,
      }
    },
    methods:{
      openSelect(){
        console.log(1111);
        this.isActive = !this.isActive;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
 .announcement-Tab {
   @include contentWidth(1200px);
 }

</style>
