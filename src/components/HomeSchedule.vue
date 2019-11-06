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
}
</style>
