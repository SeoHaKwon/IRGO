<template>
  <div class="HomeSchedule">
  	<div class="schedule-container">
  		<h2 class="title">다가오는 일정</h2>
  		<ul class="schedule-list">
  			<li>
  				<h4 class="item-date">2019. 09. 27</h4>
  				<h3 class="item-title">2019년 3분기 실적 가이던스 공시</h3>
  				<button class="item-button">
  					Conference Call
  					<img width="15px" src="../assets/img/ic_conference_call.png" />
  				</button>
  			</li>
  			<li>
  				<h4 class="item-date">2019. 09. 27</h4>
  				<h3 class="item-title">2019년 3분기 실적 가이던스 공시</h3>
  				<button class="item-button">
  					Conference Call
  					<img width="15px" src="../assets/img/ic_conference_call.png" />
  				</button>
  			</li>
  			<li>
  				<h4 class="item-date">2019. 09. 27</h4>
  				<h3 class="item-title">2019년 3분기 실적 가이던스 공시</h3>
  				<button class="item-button">
  					Conference Call
  					<img width="15px" src="../assets/img/ic_conference_call.png" />
  				</button>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<style lang="scss">
.HomeSchedule {
	background: #FAFAFA;
	padding: 92px 0;

	.schedule-container {
		width: 1150px;
		margin: 0 auto;
		display: flex;
		justify-content: left;

		& .title {
			flex-basis: 25%;
			font-size: 25px;
			color: #000000;
			font-weight: bold;
		}

		.schedule-list {
			flex-basis: 75%;

			& li {
				list-style: none;
				display: flex;
				justify-content: left;
				align-items: center;
				margin-bottom: 40px;

				&:last-child {
					margin-bottom: 0;
				}

				.item-date {
					padding-left: 20px;
					border-left: 3px solid #DF1152;
					flex-basis: 15%;
					color: #ccc;
				}
				.item-title {
					padding-left: 20px;
					flex-basis: 50%;
				}
				.item-button {
					flex-basis: 150px;
					background: #B2B8C8;
					color: #FFFFFF;
					text-align: cetner;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 13px;
					padding: 5px;
					border-radius: 20px;
					outline: 0;

					img {
						margin-left: 3px;
					}
				}
			}
		}
	}
	@media (min-width: 900px) and (max-width: 1149px) {
	  .schedule-container {
	  	width: 900px;
	  }
	  .schedule-list {
	  	flex-basis: 75%;

	  	& li {
	  		.item-date {
	  			padding-left: 20px;
	  			border-left: 3px solid #DF1152;
	  			flex-basis: 20% !important;
	  			color: #ccc;
	  		}
	  	}
	  }
	}
	@media ( max-width: 899px ) {
		padding: 30px 20px;

		.schedule-container {
			width: 100%;
			display: block;

			& .title {
				font-size: 18px;
			}

			.schedule-list {
				margin-top: 30px;

				& li {
					list-style: none;
					display: block;
					margin-bottom: 25px;
					border-left: 3px solid #DF1152;
					position: relative;

					&:last-child {
						margin-bottom: 0;
					}

					.item-date {
						padding-left: 10px;
						border-left: 0;
						font-size: 10px;
					}
					.item-title {
						padding-left: 10px;
						font-size: 12px;
					}
					.item-button {
						width: 117px;
					    font-size: 10px;
					    border-radius: 20px;
					    position: absolute;
					    top: 50%;
					    right: 0;
					    transform: translate(0, -50%);
					    padding: 2px;

						img {
							margin-left: 3px;
						}
					}
				}
			}
		}
	}
}
</style>
