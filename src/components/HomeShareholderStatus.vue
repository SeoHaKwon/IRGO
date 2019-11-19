<template>
  <div class="HomeShareholderStatus contaner">
    <h2>주주현황</h2>
    <h3>주주구성</h3>
    <div class="status-grafs">
      <div class="grafs">
        <vc-donut
            background="#ffffff" 
            foreground="grey"
            :size="100"
            unit="%" 
            has-legend
            :thickness="40"
            legend-placement="bottom"
            :sections="sections"
            :total="100"
            :start-angle="0"
          />
      </div>
      <div class="tables">
        <div class="table-caption">* 2018년 12월 31일 기준</div>
        <div>
          <div class="tables-header">
            <h5>구분</h5>
            <h5>주식수</h5>
            <h5>배율</h5>
          </div>
          <div class="tables-body">
            <h5>최대주주 외 특수관계인</h5>
            <h5>11,111,111</h5>
            <h5>25.7</h5>
          </div>
          <div class="tables-body">
            <h5>최대주주 외 특수관계인</h5>
            <h5>11,111,111</h5>
            <h5>25.7</h5>
          </div>
          <div class="tables-body">
            <h5>최대주주 외 특수관계인</h5>
            <h5>11,111,111</h5>
            <h5>25.7</h5>
          </div>
          <div class="tables-body">
            <h5>최대주주 외 특수관계인</h5>
            <h5>11,111,111</h5>
            <h5>25.7</h5>
          </div>
          <div class="tables-body">
            <h5>최대주주 외 특수관계인</h5>
            <h5>11,111,111</h5>
            <h5>25.7</h5>
          </div>
        </div>
        <div class="tables-footer">
          <h5>합계</h5>
          <h5>43,223,22</h5>
          <h5>100.0</h5>
        </div>
      </div>
    </div>
    <h3>배당내역</h3>
    <div class="get-price">
      <div class="tables">
        <div class="table-caption">* 연결 기준(단위: 백만원)</div>
        <div>
          <div class="tables-header">
            <h5>구분</h5>
            <h5>2018</h5>
            <h5>2017</h5>
            <h5>2016</h5>
          </div>
          <div class="tables-body">
            <h5>당기순이익</h5>
            <h5>224,157</h5>
            <h5>224,157</h5>
            <h5>224,157</h5>
          </div>
          <div class="tables-body">
            <h5>당기순이익</h5>
            <h5>224,157</h5>
            <h5>224,157</h5>
            <h5>224,157</h5>
          </div>
          <div class="tables-body">
            <h5>
                <h6>당기순이익</h6>
                <h6>보통주</h6>
            </h5>
            <h5>224,157</h5>
            <h5>224,157</h5>
            <h5>224,157</h5>
          </div>
          <div class="tables-body">
            <h5>
                <h6>당기순이익</h6>
                <h6>보통주</h6>
            </h5>
            <h5>224,157</h5>
            <h5>224,157</h5>
            <h5>224,157</h5>
          </div>
        </div>
        <div class="tables-footer">
          <h5>
              <h6>배당총액</h6>
              <h6>소계</h6>
          </h5>
          <h5>43,223,22</h5>
          <h5>100.0</h5>
          <h5>100.0</h5>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
Vue.use(Donut);

export default {
  name: 'HomeShareholderStatus',
  components: {
  },
  data() {
    return {
      sections: [
            { label: 'LG전자', value: 37.9, color: '#EA1E64' },
            { label: '외국인', value: 21.3, color: '#EE4B82' },
            { label: '국내개인', value: 20, color: '#F278A2' },
            { label: '국내기관', value: 8.6, color: '#424347' },
            { label: '국민연금', value: 8.7, color: '#8F8E95' },
            { label: 'ADE', value: 3.4, color: '#D2D1D8' },
        ]
    }
  },
  computed: {
    
  },
  created() {
  }
}
</script>
<style lang="scss">

.HomeShareholderStatus {
  padding: 120px 0;

  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    padding: 25px 0;
  }
  h3 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    padding: 116px 0 40px 0;
  }

  .status-grafs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;

    & .grafs {
        padding-top: 40px;
        flex-basis: calc(50% - 20px);
        flex-shrink: 0;
        border-top: 2px solid #000000;
    }
  }

  & .tables {
   flex-basis: calc(50% - 20px);
   flex-shrink: 0;
   border-top: 2px solid #000000;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   position: relative;

   .table-caption {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 10px;
    color: #888;
    font-size: 15px;
  }

   .tables-header {
      padding: 27px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #E6E6E6;

      & h5:first-child {
        flex-basis: 60%;
      }
      & h5 {
        flex-basis: 20%;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
      }
    }
    .tables-body {
       padding: 15px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       border-bottom: 1px solid #E6E6E6;

       & h5 {
         flex-basis: 20%;
         text-align: center;
         font-size: 16px;

         & h6 {
            flex-basis: 50%;
            flex-shrink: 0;
            font-size: 16px;
        }
       }
       & h5:first-child {
         flex-basis: 60%;
         text-align: left !important;
         display: flex;
         justify-content: space-between;
         align-items: center;
       }
     }
     .tables-footer {
        padding: 15px;
        display: flex;
        justify-content: left;
        align-items: center;
        border-bottom: 1px solid #E6E6E6;

        & h5 {
            flex-basis: 20%;
            text-align: center;
            font-size: 16px;
            font-weight: bold;

           & h6 {
              flex-basis: 50%;
              flex-shrink: 0;
              font-size: 16px;
          }
        }
        & h5:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-basis: 60%;
            text-align: left;
        }
      }
  }

  .get-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;

    & .tables {
      flex-basis: 100%;
      flex-shrink: 0;
    }
  }

  @media ( max-width: 899px ) {
    padding: 30px 15px;

    h2 {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      padding: 15px 0;
    }
    h3 {
      text-align: center;
      font-size: 17px;
      font-weight: bold;
      padding: 50px 0 40px 0;
    }

    .status-grafs {
      display: block;
      justify-content: space-between;
      margin-bottom: 70px;

      & .grafs {
          padding-top: 40px;
          padding-left: 60px;
          padding-right: 60px;
          flex-basis: calc(50% - 20px);
          flex-shrink: 0;
          border-top: 2px solid #000000;
      }
    }

    & .tables {
     flex-basis: calc(50% - 20px);
     flex-shrink: 0;
     border-top: 2px solid #000000;
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     position: relative;
     margin-top: 30px;

     .table-caption {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 10px;
      color: #888;
      font-size: 11px;
    }

     .tables-header {
        padding: 27px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #E6E6E6;

        & h5:first-child {
          flex-basis: 60%;
        }
        & h5 {
          flex-basis: 20%;
          text-align: center;
          font-size: 13px;
          font-weight: bold;
        }
      }
      .tables-body {
         padding: 15px;
         display: flex;
         justify-content: space-between;
         align-items: center;
         border-bottom: 1px solid #E6E6E6;

         & h5 {
           flex-basis: 20%;
           text-align: center;
           font-size: 13px;

           & h6 {
              flex-basis: 50%;
              flex-shrink: 0;
              font-size: 13px;
          }
         }
         & h5:first-child {
           flex-basis: 60%;
           text-align: left !important;
           display: flex;
           justify-content: space-between;
           align-items: center;
         }
       }
       .tables-footer {
          padding: 15px;
          display: flex;
          justify-content: left;
          align-items: center;
          border-bottom: 1px solid #E6E6E6;

          & h5 {
              flex-basis: 20%;
              text-align: center;
              font-size: 13px;
              font-weight: bold;

             & h6 {
                flex-basis: 50%;
                flex-shrink: 0;
                font-size: 13px;
            }
          }
          & h5:first-child {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-basis: 60%;
              text-align: left;
          }
        }
    }

    .get-price {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;

      & .tables {
        flex-basis: 100%;
        flex-shrink: 0;
      }
    }
  }
}
</style>
