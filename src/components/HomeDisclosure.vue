<template>
  <div class="HomeDisclosure contaner">
    <h2 class="section-title">공시</h2>
    <h3 class="section-sube">
      Disclosure
    </h3>
    <ul class="disclosure-info">
        <li v-for="item in disclo" v-on:click="GSITE(item.SITEURL)">
            <h5>{{ item.TITLE }}</h5>
            <h6>
                {{ item.REG_DATE}}
            </h6>
        </li>
    </ul>
    <div class="home-more-btn">
      <button
        type="button"
        class=""
      >
      <h6>더보기</h6>
      <img 
        width="12px" 
        src="../assets/img/more_arrow.png" 
      />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomeDisclosure',
  components: {
  },
  data: () => {
    return {
      disclo: []
    }
  },
  mounted () {},
  computed: {
    ...mapGetters(['getCompSeq', 'getCompCode'])
  },
  methods: {
    GSITE(url) {
      location.href= url
    }
  },
  watch: {
    getCompCode () {
      const _self = this
      const aram = {
        comp_name: _self.getCompName,
        code: _self.getCompCode
      }
      const pres = this.$store.dispatch('GET_DIS', aram)
      .then(res => {
        _self.disclo = res
      })
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeDisclosure {
  padding-top: 200px;

  .disclosure-info {
      margin-top: 106px;
      list-style: none;

      li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 20px;
          border-bottom: 1px solid $border-color;
          height: 120px;
          cursor: pointer;

          &:first-child {
              border-top: 1px solid $border-color;
          }

          h5 {
              font-size: 21px;
              letter-spacing: -0.5px;
              color: $font-color-base;
          }
          h6 {
              font-size: 12px;
              text-align: right;
              letter-spacing: -0.5px; 
              color: #8E8E93;
          }
      }
  }

  @media ( max-width: 899px ) {
    padding: 38px 0;
    border-top: 8px solid #EFEFF4;

    .disclosure-info {
        margin-top: 50px;
        list-style: none;
        padding: 0 16px;

        li {
            display: block;
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
                ont-size: 10px;
                text-align: left;
                letter-spacing: -0.5px; 
                color: #8E8E93;
                margin-top: 7px;
            }
        }
    }
  }
}
</style>
