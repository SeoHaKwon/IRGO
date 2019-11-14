<template>
  <div class="HomeShareholderStatus contaner">
    <h2>주주현황</h2>
    <h3>주주구성</h3>
    <div class="status-grafs">
      <div class="grafs">
        <img 
          width="100%" 
          src="../assets/img/img_graf.png" 
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
        </div>
        <div class="tables-footer">
          <h5>합계</h5>
          <h5>43,223,22</h5>
          <h5>100.0</h5>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HomeShareholderStatus',
  components: {
  },
  data() {
    return {
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
      padding: 27px;
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
       }
       & h5:first-child {
         flex-basis: 60%;
         text-align: left !important;
       }
     }
     .tables-footer {
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #E6E6E6;

        & h5 {
          flex-basis: 20%;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
        }
        & h5:first-child {
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
</style>
