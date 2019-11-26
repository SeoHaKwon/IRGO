<template>
  <div class="PerformanceFAQ">
    <div class="FAQ-title">
      <h4>FAQ</h4>
      <div class="performance-select">
          <div class="select-warp">
              <select>
                  <option>2019.2Q</option>
                  <option>2019.2Q</option>
                  <option>2019.2Q</option>
                  <option>2019.2Q</option>
              </select>
              <div class="select-arrow">▲</div>
          </div>
      </div>
    </div>
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
    <ul class="performance-FAQ">
      <li>
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>일반 조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁금합니다.</h4>
            <h6>2019년 10월 10일</h6>
        </div>
      </li>
      <li>
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>베스트바이와 손잡고 미국시장에 집중하고 있는데 현재 미국시장에서의 입지와 앞으로의 계획은 어떻게 되나요?</h4>
            <h6>2019년 10월 10일</h6>
        </div>
      </li>
      <li>
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>중국 현지 LCD 기업이 부진하고 LCD시장의 불황인 상황인데 현 상황에서 계획은?</h4>
            <h6>2019년 10월 10일</h6>
        </div>
      </li>
      <li>
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>2018년에 조달해 둔 자금을 사용하지 않았기 때문에 추가적인 자금사용계획이 있으신가요?</h4>
            <h6>2019년 10월 10일</h6>
        </div>
      </li>
      <li>
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>이번에 조직개편을 단행하였는데 R&D 조직 개편 강화와 시장 상황에 신속 대응하고자 한다고 하셨는데 구체적인 계획이 어떻게 되나요?</h4>
            <h6>2019년 10월 10일</h6>
        </div>
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
    .FAQ-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 137px;

        & h4 {
            font-size: 32px;
            color: #1B1D20;
        }
    }

    .performance-FAQ {
        list-style: none;

        li {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #1B1D20;
            margin-top: 34px;
            padding: 34px 0;

            &:first-child {
                border-top: 1px solid #1B1D20;
            }

            & h5 {
                flex-basis: 25px;
                font-size: 21px;
                letter-spacing: -0.5px;
                color: #C7C7CC;
            }
            & .title {
                flex-basis: calc(100% - 25px);
                padding-left: 8px;

                & h4 {
                    font-size: 21px;
                    letter-spacing: -0.5px;
                    color: #1B1D20;
                }
                & h6 {
                    font-size: 12px;
                    letter-spacing: -0.5px;
                    color: #8E8E93;
                    opacity: 0.87;
                    margin-top: 16px;
                }
            }
        }
    }
    @media ( max-width: 899px ) {
      .performance-select {
        display: none !important;
      }
      .FAQ-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 41px;
          padding: 0 16px;

          & h4 {
              font-size: 32px;
              color: #1B1D20;
          }
      }
      .performance-FAQ {
          list-style: none;

          li {
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid #1B1D20;
              margin-top: 34px;
              margin: 0 21px;

              &:first-child {
                  border-top: 0;
              }

              & h5 {
                  flex-basis: 25px;
                  font-size: 21px;
                  letter-spacing: -0.5px;
                  color: #C7C7CC;
                  display: none;
              }
              & .title {
                  flex-basis: calc(100% - 25px);
                  padding-left: 0;

                  & h4 {
                      font-size: 16px;
                      letter-spacing: -0.5px;
                      color: #1B1D20;
                  }
                  & h6 {
                      font-size: 10px;
                      letter-spacing: -0.5px;
                      color: #8E8E93;
                      opacity: 0.87;
                      margin-top: 20px;
                  }
              }
          }
      }
        
    }
}
</style>
