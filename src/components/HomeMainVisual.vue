<template>
  <div class="HomeMainVisual">
  	<!-- 메인 -->
  	<div class="home-main-visual">
  		<h2>Inverstor Relations</h2>
  	</div>
  </div>
</template>

<style lang="scss">
.HomeMainVisual {
	.home-main-visual {
		background: url('../assets/img/img_main_visual.png') no-repeat center center / cover;
		width: 100%;
		height: 517px;
		display: flex;
		justify-content: center;
		align-items: center;

		& h2 {
			color: #ffffff;
			font-size: 40px;
		}
	}

	@media ( max-width: 1149px ) {
	  .home-main-visual {
	  	height: 250px;
	  	& h2 {
	  		color: #ffffff;
	  		font-size: 24px;
	  	}
	  }
	}
}
</style>
