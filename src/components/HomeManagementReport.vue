<template>
  <div class="HomeManagementReport contaner">
    <h2>경영보고서</h2>
    <div class="report-download-box"> 
      <img 
        width="130px" 
        src="../assets/img/img_report.png" 
      />
      <ul class="download-list-group">
        <li>
          <h5>사업보고서</h5>
          <img 
            width="25px"
            src="../assets/img/ic_report_download.png" 
          />
        </li>
        <li>
          <h5>사업보고서</h5>
          <img 
            width="25px"
            src="../assets/img/ic_report_download.png" 
          />
        </li>
        <li>
          <h5>사업보고서</h5>
          <img 
            width="25px"
            src="../assets/img/ic_report_download.png" 
          />
        </li>
      </ul>
    </div>
    <h3 class="report-group-tab-title">재무재표</h3>
    <ul class="report-group-tab">
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
    <div class="report-download-box"> 
      <img 
        width="130px" 
        src="../assets/img/img_report.png" 
      />
      <ul class="download-list-group">
        <li>
          <h5>사업보고서</h5>
          <img 
            width="25px"
            src="../assets/img/ic_report_download.png" 
          />
        </li>
        <li>
          <h5>사업보고서</h5>
          <img 
            width="25px"
            src="../assets/img/ic_report_download.png" 
          />
        </li>
        <li>
          <h5>사업보고서</h5>
          <img 
            width="25px"
            src="../assets/img/ic_report_download.png" 
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeManagementReport',
  components: {
  }
}
</script>
<style lang="scss">
.HomeManagementReport {
  padding: 120px 0;

  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    padding: 25px 0;
    border-bottom: 2px solid #000;
  }

  .report-download-box {
    display: flex;
    justify-content: space-between;
    padding: 70px;
  }
  .download-list-group {
    flex-basis: calc(100% - 160px);
    padding-left: 66px;

    & li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #E6E6E6;
      padding: 20px;

      & h5 {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .report-group-tab-title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    margin-top: 45px;
  }
  .report-group-tab {
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

    @media ( max-width: 1149px ) {
      padding: 30px 15px;

      h2 {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        padding: 25px 0;
        border-bottom: 2px solid #000;
      }

      .report-download-box {
        display: flex;
        justify-content: space-between;
        padding: 0;
        align-items: center;
        margin-top: 30px;
      }
      .download-list-group {
        flex-basis: calc(100% - 130px);
        padding-left: 30px;

        & li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #E6E6E6;
          padding: 15px 0;

          & h5 {
            font-size: 16px;
            font-weight: normal;
          }
        }
      }
      .report-group-tab-title {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-top: 45px;
      }
      .report-group-tab {
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
            font-size: 13px;
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

}
</style>
