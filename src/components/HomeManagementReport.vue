<template>
  <div class="HomeManagementReport contaner">
    <h2 class="section-title">경영보고서</h2>
    <h3 class="section-sube">
      Documents & Report
    </h3>
    <ul class="management-report">
        <li v-for="(item, key) in report">
            <h5>{{ item.TITLE }}</h5>
            <h6>
                <a :href="'https://file.irgo.co.kr/data/BOARD/ATTACH_PDF/'+item.UPLOAD_FILE">
                  <img
                      width="30px"
                      src="../assets/img/ic_file_download.png"
                  />
                </a>
                <span class="data-type">PDF</span>
            </h6>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomeManagementReport',
  components: {
  },
  data: () => {
    return {
      report: []
    }
  },
  computed: {
    ...mapGetters(['getCompSeq'])
  },
  watch: {
    getCompSeq () {
      const _self = this
      const aram = {
        seq: _self.getCompSeq
      }
      const pres = this.$store.dispatch('GET_MREPORT', aram)
      .then(res => {
        _self.report = res
      })
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeManagementReport {
    padding-top: 185px;

    .management-report {
        margin-top: 106px;
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

    @media ( max-width: 899px ) {
    padding: 38px 0;
    border-top: 8px solid #EFEFF4;
      .management-report {
          margin-top: 50px;
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
                  border-top: 1px solid $border-color;
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
    }

}
</style>
