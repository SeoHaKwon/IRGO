<template>
  <div class="PerformanceFAQ">
    <h3>
      FAQ
        <div class="home-more-btn top-btn">
          <button
            type="button"
            class=""
          >
          <h6>문의하기</h6>
          <img 
            width="20px" 
            src="../assets/img/ic_performanve_FAQ_arror.png" 
          />
        </button>
      </div>
    </h3>
    <ul class="performance-FAQ">
      <li>
        <h5>
          Q
        </h5>
        <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
        <img 
          width="20px" 
          src="../assets/img/ic_performanve_FAQ_arror.png" 
        />
      </li>
      <li>
        <h5>
          Q
        </h5>
        <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
        <img 
          width="20px" 
          src="../assets/img/ic_performanve_FAQ_arror.png" 
        />
      </li>
      <li>
        <h5>
          Q
        </h5>
        <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
        <img 
          width="20px" 
          src="../assets/img/ic_performanve_FAQ_arror.png" 
        />
      </li>
      <li>
        <h5>
          Q
        </h5>
        <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
        <img 
          width="20px" 
          src="../assets/img/ic_performanve_FAQ_arror.png" 
        />
      </li>
      <li>
        <h5>
          Q
        </h5>
        <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
        <img 
          width="20px" 
          src="../assets/img/ic_performanve_FAQ_arror.png" 
        />
      </li>
      <li>
        <h5>
          Q
        </h5>
        <h4>일반조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁급합니다.</h4>
        <img 
          width="20px" 
          src="../assets/img/ic_performanve_FAQ_arror.png" 
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
</template>

<script>

export default {
  name: 'PerformanceFAQ',
  components: {
  }
}
</script>
<style lang="scss">
.PerformanceFAQ {
  h3 {
    font-size: 30px;
    text-align: center;
    margin-top: 100px;
    padding: 25px 0;
    text-align: center;
    border-bottom: 2px solid #bbb;
    position: relative;
  }
  .performance-FAQ {

    & li {
      padding: 35px;
      border-bottom: 1px solid #E6E6E6;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & h5 {
        flex-basis: 30px;
        font-size: 30px;
        color: #ddd;
      }
      & h4 {
        flex-basis: calc(100% - 60px);
        padding-left: 35px;
        font-size: 18px;
      }
      & img {
        flex-basis: 30px;
      }
    }
  }

  @media ( max-width: 1149px ) {
    h3 {
      font-size: 20px;
      margin-top: 30px;
      padding: 30px 0;
    }
    .performance-FAQ {
      & li {
        padding: 15px;
        border-bottom: 1px solid #E6E6E6;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & h5 {
          flex-basis: 20px;
          font-size: 20px;
          color: #ddd;
        }
        & h4 {
          flex-basis: calc(100% - 20px);
          padding-left: 10px;
          font-size: 13px;
        }
        & img {
          flex-basis: 20px;
          display: none;
        }
      }
    }
  }
}
</style>
