<template>
  <div class="shareholder-wrap">
    <div class="title-wrap"><strong>주주구성</strong></div>
    <div class="table-wrap">
       <div class="chart-wrap">
        <img src="../assets/images/img/img_chart.png" alt="" style="width:100%;">
      </div>
        <div class="table">
          <table>
            <colgroup>
              <col style="auto">
              <col style="max-width:150px">
              <col style="max-width:120px">
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="textLeft">구분</th>
                <th scope="col">주식수</th>
                <th scope="col">비율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>최대주주 외 특수관계인</th>
                <td>11,111,111</td>
                <td>25.7</td>
              </tr>
              <tr>
                <th>기관 주주</th>
                <td>11,111,111</td>
                <td>2.7</td>
              </tr>
               <tr>
                <th>외국인 주주</th>
                <td>888,888</td>
                <td>25.7</td>
              </tr>
              <tr>
                <th>외국인 주주</th>
                <td>100,000</td>
                <td>0.2</td>
              </tr>
               <tr>
                <th>개인 주주 외</th>
                <td>30,000,000</td>
                <td>69.4</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>합계</th>
                <td>43,211,110</td>
                <td>100.0</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p class="noti">2018년 12월 31일 기준</p>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
.shareholder-wrap {
  @include contentWidth($width:1200px);
  .table-wrap {
    display:flex;
    flex-wrap: wrap;
    .chart-wrap,.table {
      width:calc(50% - 20px);
    }
    .chart-wrap {
      margin-right:40px;

    }
    .table {
      tbody {
          tr{
            & + tr {
              td,th {
                border-top:none;
              }
            }
            &:first-child{
              th,td {
                padding-top:52px;
              }
            }
            &:last-child{
              th,td {
                padding-bottom:60px;
              }
            }
          }
        }
      }
    tfoot{
      th {
        padding:63px 30px 46px 30px;
        text-align: left;
        font-weight: 500;
        color: #333;
        vertical-align: middle;
        font-size:20px;
        line-height:22px;
        color:$black3;
        border-top:1px solid #dddddd;
      }
      td {
        padding: 63px 30px 46px 46px;
        font-size: 20px;
        color:$black3;
        font-weight: 500;
        text-align: right;
        border-top:1px solid #dddddd;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .shareholder-wrap  {
    .table-wrap {
      .chart-wrap,.table {
        width:100%;
      }
      .chart-wrap {
        margin-bottom:45px;
        margin-right:0;
      }
    .table {
      border-top-width: 2px;
      thead {
        tr {
            th{
              &:first-child {
                padding-left:17px;
              }
              &:last-child {
                padding-right:17px;
              }
            }
          }
        }
      tbody {
        tr {
          &:first-child {
            td,th {
              padding-top:26px;
            }
          }
          &:last-child {
            th,td {
              padding-bottom:30px;
            }
          }
        th,td{
            &:first-child {
              padding-left:17px;
            }
            &:last-child {
              padding-right:17px;
            }
          }
        }
      }
      tfoot {
        tr {
          th,td {
            font-size:13px;
            padding:17px 0;
            &:first-child {
              padding-left:17px;
            }
            &:last-child {
              padding-right:17px;
            }
          }
        }
      }
      }
    }
  }
}
</style>
