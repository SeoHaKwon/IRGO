<template>
  <div class="HomeMainVisual">
  	<!-- 메인 -->
  	<div class="home-main-visual" :style="{ 'background': 'url('+Banner+') no-repeat center center/cover' }">
  		<div class="home-main-visual-container">
  			<h2 :style="BN_Text">Inverstor Relations</h2>

	  		<div class="main-information" v-if="Price.NowJuka">
		  		<div class="title">
		  			<h4>
		  				{{ Price.NowJuka}}원
		  			</h4>
		  			<h5>{{ Price.DungRak }} {{ Price.Debi }} ({{ Price.Cent}}%)</h5>
		  		</div>
		  		<h5 class="information">
		  			거래량 {{ Price.Volume }} <br />
		  			시가총액 {{ Price.totals }}억원
		  		</h5>
		  		<h6 class="curtion">
		  			{{ Price.sumDay }} {{ Price.JongName }} 보통주
		  		</h6>
		  	</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      Price: [],
      Banner: '',
      BN_Text: 'background-color: rgba(0, 0, 0, 0.4);color: white;padding: 20.35% 36.202%;'
    }
  },
  computed: {
    ...mapGetters(['getCompCode', 'getBanner'])
  },
  watch: {
    getCompCode () {
      const _self = this
      if (_self.getCompCode) {
        const param = {
          code: _self.getCompCode
        }
        _self.$store.dispatch('GET_KRX', param)
          .then(res => {
            _self.Price = res
            _self.Price.totals = (_self.removeComma(res.NowJuka) * _self.removeComma(res.Amount)/100000000).toFixed(2)
            _self.getNowDate()
          })
      }
    },
    getBanner () {
      const _self = this
      _self.Banner = 'https://file.irgo.co.kr/data/IRPAGE/IMG/'+_self.getBanner
      console.log(_self.Banner)
    }
  },
  methods: {
    getNowDate () {
      const _self = this
      let month = new Date().getMonth() + 1;
      if (month == 13) {
        month = 1
      }
      let day = new Date().getDate()
      let hour = new Date().getHours()
      let min = new Date().getMinutes()
      const sum = month+'/'+day+' '+hour+':'+min
      _self.Price.sumDay = sum
    },
    removeComma (str) {
      let n = parseInt(str.replace(/,/g,""))
		  return Number(n)
    }
  }
}
</script>

<style lang="scss">
@import "@/style/_variables.scss";
.HomeMainVisual {
	.home-main-visual {
		background: url('../assets/img/img_main_visual.png') no-repeat center center / cover;
		width: 100%;
		height: 500px;

		.home-main-visual-container {
			width: 1150px;
			height: 100%;
			margin: 0 auto;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;

			.main-information {
				width: 274px;
				background: $font-color-base;
				opacity: 0.9;
				padding: 43px 36px 30px 36px;
				position: absolute;
				bottom: 0;
				right: 0;
				color: #fff;

				.title {

					& h4 {
						font-weight: bold;
						font-size: 34px;
					}
					& h5 {
						font-size: 16px;
						margin-top: 9px;
					}
				}
				.information {
					font-size: 16px;
					line-height: 24px;
					margin-top: 14px;
				}
				.curtion {
					margin-top: 48px;
					font-size: 10px;
				}
			}
		}

		& h2 {
			font-size: 34px;
			color: #FFFFFF;
			font-weight: bold;
			text-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
		}
	}

	@media (min-width: 900px) and (max-width: 1149px) {
	  .home-main-visual-container {
	    width: 900px !important;
	  }
	}
	
	@media ( max-width: 899px ) {
	  .home-main-visual {
	  	height: 300px;

	  	.home-main-visual-container {
	  		width: 100%;
	  		height: 100%;
	  		margin: 0 auto;
	  		position: relative;
	  		display: flex;
	  		flex-direction: column;
	  		justify-content: flex-end;
	  		align-items: center;
	  		padding: 20px;

	  		.main-information {
	  			width: 100%;
	  			background: $font-color-base;
	  			opacity: 0.9;
	  			padding: 13px 20px;
	  			position: relative;
	  			bottom: 0;
	  			left: 0;
	  			color: #fff;

	  			.title {
	  				display: flex;
	  				align-items: flex-end;
	  				& h4 {
	  					font-weight: bold;
	  					font-size: 24px;
	  				}
	  				& h5 {
	  					font-size: 12px;
	  					margin-top: 0;
	  					margin-left: 10px;
	  					margin-bottom: 2px;
	  				}
	  			}
	  			.information {
	  				display: none;
	  				font-size: 16px;
	  				line-height: 24px;
	  				margin-top: 14px;
	  			}
	  			.curtion {
	  				margin-top: 4px;
	  				font-size: 10px;
	  			}
	  		}
	  	}

	  	& h2 {
	  		color: #ffffff;
	  		font-size: 24px;
	  		font-weight: bold;
			height: calc(100% - 81px);
			display: flex;
			align-items: center;
	  	}
	  }
	}
}
</style>
