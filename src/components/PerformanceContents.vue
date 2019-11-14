<template>
  <div class="PerformanceContents">
    <div class="performance-group">
      <h3>실적발표자료</h3>
      <ul class="performance-group-tab">
        <li class="active">
          <a>19.2Q</a>
        </li>
        <li>
          <a>19.1Q</a>
        </li>
        <li>
          <a>18.4Q</a>
        </li>
        <li>
          <a>18.3Q</a>
        </li>
        <li>
          <a>18.2Q</a>
        </li>
      </ul>
      <div class="performance-contents">
        <div class="contents-image">
          <div 
            class="contents-image-content"
          >
            2019년 2분기 <br />
            실적 설명회
          </div>
        </div>
        <ul>
          <li>
            <a>2019 2분기 실적자료</a>
            <img 
              width="40px"
              src="../assets/img/ic_performanve_arrow.png"
            />
          </li>
          <li>
            <div class="performance-contents-itme">
              <a>2019 2분기 실적자료</a>
              <img 
                width="40px"
                src="../assets/img/ic_performanve_arrow.png"
              />
              
            </div>
            <div class="performance-contents-itme">
              <a>2019 2분기 실적자료</a>
              <img 
                width="40px"
                src="../assets/img/ic_performanve_arrow.png"
              />
            </div>
          </li>
          <li>
            <div class="performance-contents-itme">
              <a>2019 2분기 실적자료</a>
              <img 
                width="40px"
                src="../assets/img/ic_performanve_arrow.png"
              />
              
            </div>
            <div class="performance-contents-itme">
              <a>2019 2분기 실적자료</a>
              <img 
                width="40px"
                src="../assets/img/ic_performanve_arrow.png"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PerformanceContents',
  components: {
  }
}
</script>
<style lang="scss">
.PerformanceContents {
  .performance-group {
    margin-top: 120px;

    h3 {
      font-size: 30px;
      text-align: center;
      margin-top: 12px;
    }
    .performance-group-tab {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & li {
        list-style: none;
        flex-basis: 20%;
        width: 20%;
        flex-shrink: 0;
        padding: 25px 0;
        text-align: center;
        font-size: 16px;
        color: #bbb;
        border-bottom: 2px solid #bbb;
        cursor: pointer;

        &.active {
          color: #000;
          border-bottom: 2px solid #000;
        }
      } 
    }
  }
  .performance-contents {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    & .performance-contents-itme {
      flex-basis: calc(50% - 20px);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & .contents-image {
      flex-basis: 50%;
      flex-shrink: 0;
      width: 50%;
      background: url('../assets/img/dumy.png') left center no-repeat / cover;
      position: relative;

      & .contents-image-content {
        position: absolute;
        height: 90%;
        width: 50%;
        bottom: 0;
        right: -20px;
        background: url('../assets/img/dumy_2.png') left center no-repeat / cover;
        padding: 45px;
        color: #ffffff;
        font-size: 30px;
      }
    }
    & ul {
      flex-basis: 50%;
      flex-shrink: 0;
      width: 50%;
      border-top: 2px solid #000;
      margin-left: 60px;
      
      & li {
        list-style: none;
        padding: 50px 0;
        border-bottom: 1px solid #e6e6e6;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

}
</style>
