<template>
  <div class="HomeSchedule">
  	<div class="schedule-container">
  		<h2 class="title">
  			다가오는
  			일정
  		</h2>
  		<ul class="schedule-list">
  			<li>
  				<div>
  					<h4 class="item-date">2019년 10월 28일 13:00</h4>
  					<h3 class="item-title">LG디스플레이, 3분기 실적발표 컨퍼런스콜</h3>
  				</div>
  				<img
  					width="11px" 
  					src="../assets/img/schedule_arrow.png"
  				/>
  			</li>
  			<li>
  				<div>
	  				<h4 class="item-date">2019. 09. 27</h4>
	  				<h3 class="item-title">2019년 3분기 실적 가이던스 공시</h3>
  				</div>
  				<img
  					width="11px" 
  					src="../assets/img/schedule_arrow.png"
  				/>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<style lang="scss">
@import "@/style/_variables.scss";

.HomeSchedule {
	background: #F2F2F2;
	
	.schedule-container {
		width: 1150px;
		margin: 0 auto;
		padding: 73px 0;
		display: flex;
		justify-content: space-between;

		.title {
			font-weight: bold;
			font-size: 32px;
			line-height: 42px;
			color: #1B1D20;
			flex-basis: 150px;
		}

		.schedule-list {
			flex-basis: calc(100% - 150px);
			padding-left: 100px;

			li {
				list-style: none;
				background: #ffffff;
				padding: 30px 36px;
				border-left: 4px solid $brand-color;
				margin-bottom: 20px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.item-date {
					color: $brand-color;
					margin-bottom: 10px;
					font-size: 14px;
				}

				.item-title {
					color: #1B1D20;
					opacity: 0.87;
					font-size: 21px;
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}

	@media (min-width: 900px) and (max-width: 1149px) {
	  .schedule-container {
	    width: 900px !important;
	  }
	}

	@media ( max-width: 899px ) {
	  .schedule-container {
	  	width: 100%;
	  	margin: 0 auto;
	  	padding: 35px 16px;
	  	display: block;
	  	justify-content: space-between;

	  	.title {
	  		font-weight: bold;
	  		font-size: 20px;
	  		line-height: 42px;
	  		color: #1B1D20;
	  		flex-basis: 150px;
	  	}

	  	.schedule-list {
	  		flex-basis: calc(100% - 150px);
	  		padding-left: 0;
	  		margin-top: 14px;

	  		li {
	  			list-style: none;
	  			background: #ffffff;
	  			padding: 16px 20px;
	  			border-left: 4px solid $brand-color;
	  			margin-bottom: 20px;
	  			display: flex;
	  			justify-content: space-between;
	  			align-items: center;

	  			.item-date {
	  				color: $brand-color;
	  				margin-bottom: 10px;
	  				font-size: 11px;
	  			}

	  			.item-title {
	  				color: #1B1D20;
	  				opacity: 0.87;
	  				font-size: 16px;
	  			}

	  			&:last-child {
	  				margin-bottom: 0;
	  			}

	  			img {
	  				display: none;
	  			}
	  		}
	  	}
	  }
	}
}
</style>
