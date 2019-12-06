<template>
  <div class="HomeFinanceInfo contaner">
    <h2 class="section-title">IPO 정보</h2>
    <h3 class="section-sube">
      Initial Public Offering Information
    </h3>
    <div class="IPO-items-group">
      <div 
        v-for="ipo in IPODATA"
        class="IPO-items"
      >
        <div class="IPO-wrapper">
          <img v-if="ipo.background === 'gray'" src="../assets/img/gray_circle.png" />
          <img v-else src="../assets/img/white_circle.png" />
          <h5
            :style="`color: ${ipo.font}`"
          >
            {{ ipo.title }}
          </h5>
          <!-- <div class="IPO-arrow">
            <img v-if="ipo.arrow === 'gray'" src="../assets/img/ic_gray_arrow.png" />
            <img v-else src="../assets/img/ic_black_arrow.png" />
          </div> -->
        </div>
        <h6
          :style="`color: ${ipo.font}`"
        >
          {{ ipo.days }}
        </h6>
      </div>
    </div>
    <ul class="finance-info">
        <li>
            <h5>공모개요</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>IR Book</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>웹캐스팅</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>공모분석보고서</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>기업분석보고서</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>증권신고서</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeFinanceInfo',
  components: {
  },
  data() {
    return {
      IPODATA: [
        {
          title: '청구',
          days: '09/05',
          background: 'gray',
          font: '#313439',
          border: '2px dashed transparent',
          arrow: 'black'
        },
        {
          title: '승인',
          days: '11/07',
          background: 'gray',
          font: '#313439',
          border: '2px dashed transparent',
          arrow: 'black'
        },
        {
          title: '수요',
          days: '12/12 ~ 13',
          background: 'white',
          font: '#8E8E93',
          border: '2px dashed #D1D1D6',
          arrow: 'gray'
        },
        {
          title: '청약',
          days: '12/12 ~ 13',
          background: 'white',
          font: '#8E8E93',
          border: '2px dashed #D1D1D6',
          arrow: 'gray'
        },
        {
          title: '상장',
          days: '12/28(예정)',
          background: 'white',
          font: '#8E8E93',
          border: '2px dashed #D1D1D6',
          arrow: 'gray'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeFinanceInfo {
    padding-top: 200px;

    .finance-select {
        display: flex;
        justify-content: flex-end;
        margin-top: 40px;
    }

    .finance-info {
        margin-top: 60px;
        list-style: none;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px 20px;
            border-bottom: 1px solid $border-color;
            height: 120px;

            &:first-child {
                border-top: 1px solid $border-color;
            }

            h5 {
                font-size: 21px;
                letter-spacing: -0.5px;
                color: $font-color-base;
            }
            h6 {
                font-size: 18px;
                display: flex;
                align-items: center;
                text-align: right;
                color: $brand-color;
            }
        }
    }
    .IPO-items-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40px;
      margin-top: 106px;
    }
    .IPO-items {
      flex-basis: calc(20% - 52px);
      width: calc(20% - 5px);
      flex-shrink: 0;

      .IPO-wrapper {
        width: 100%;
        position: relative;

        & img {
          width: 100%;
        }
        & .IPO-arrow {
          width: 20%;
          position: absolute;
          top: 50%;
          left: calc(100% + 12px);
          transform: translate(0, -50%);
        }
      }

      & h5 {
        color: $font-color-base;
        margin: 0;
        position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
      }

      & h6 {
        text-align: center;
        margin-top: 30px;
        font-size: 22px;
        color: $font-color-base;
        margin: 30px 0 0 0;
      }
    }

    // .IPO-item-circle {

    // }

    @media ( max-width: 899px ) {
        padding: 38px 0;
        border-top: 8px solid #EFEFF4;

        .finance-select {
            display: flex;
            justify-content: flex-end;
            margin-top: 13px;
            display: none;
        }

      .finance-info {
          margin-top: 40px;
          list-style: none;
          padding: 0 16px;

          li {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px 0;
              border-bottom: 1px solid $border-color;
              height: auto;

              &:first-child {
                  border-top: 0;
              }

              h5 {
                  font-size: 16px;
                  letter-spacing: -0.5px;
                  color: $font-color-base;
              }
              h6 {
                  font-size: 18px;
                  display: flex;
                  align-items: center;
                  text-align: right;
                  color: $brand-color;

                  span {
                    display: none;
                  }
              }
          }
      }

      .IPO-items-group {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
            margin-top: 40px;
          }
          .IPO-items {
            flex-basis: calc(20% - 9px);
            width: calc(20% - 5px);
            flex-shrink: 0;

            .IPO-wrapper {
              width: 100%;
              position: relative;

              & img {
                width: 100%;
              }

              & .IPO-arrow {
                width: 50%;
                position: absolute;
                top: 50%;
                left: calc(100% + 12px);
                transform: translate(0, -50%);
              }
            }

            & h5 {
              color: $font-color-base;
              font-size: 14px;
              margin: 0;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

            & h6 {
              text-align: center;
              margin-top: 30px;
              font-size: 11px;
              color: $font-color-base;
              margin: 10px 0 0 0;
            }
          }


    }

}
</style>
