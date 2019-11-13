<template>
  <div class="HomeIrNews">
    <div class="contaner">
      <h2>IR News</h2>
      <ul class="performance-Ir-new">
        <li>
          <h5>
            <img 
              width="120px" 
              src="../assets/img/img_IR_news_test.png" 
            />
          </h5>
          <div class="performance-Ir-new-title">
            <h4>카테고리</h4>
            <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
        <li>
          <div class="performance-Ir-new-title">
            <h4>카테고리</h4>
            <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
        <li>
          <h5>
            <img 
              width="120px" 
              src="../assets/img/img_IR_news_test.png" 
            />
          </h5>
          <div class="performance-Ir-new-title">
            <h4>카테고리</h4>
            <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
        <li>
          <h5>
            <img 
              width="120px" 
              src="../assets/img/img_IR_news_test.png" 
            />
          </h5>
          <div class="performance-Ir-new-title">
            <h4>카테고리</h4>
            <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
        <li>
          <div class="performance-Ir-new-title">
            <h4>카테고리</h4>
            <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
      </ul>
      <div class="home-more-btn">
          <button
            type="button"
            class=""
          >
          <h6>more</h6>
          <img 
            width="20px" 
            src="../assets/img/ic_performanve_FAQ_arror.png" 
          />
        </button>
      </div>
    </div>  	
  </div>
</template>

<script>

export default {
  name: 'HomeIrNews',
  components: {
  }
}
</script>
<style lang="scss">
.HomeIrNews {
  background: #F8F8FA;
  padding: 120px 0;

  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    padding: 25px 0;
    border-bottom: 2px solid #000;
  }
  .performance-Ir-new {

    & li {
      padding: 35px;
      border-bottom: 1px solid #E6E6E6;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & h5 {
        flex-basis: 120px;
        font-size: 30px;
        color: #ddd;
      }
      & img {
        margin-right: 35px;
        flex-basis: 30px;
      }
      .performance-Ir-new-title {
        flex-basis: calc(100% - 150px);

        & h4 {
          font-size: 18px;
        }
        & h5 {
          color: #bbb;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
