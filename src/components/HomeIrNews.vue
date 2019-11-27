<template>
  <div class="HomeIrNews contaner">
    <h2 class="section-title">IR News</h2>
    <h3 class="section-sube">
      Briefing & Press Release
    </h3>
    <ul class="ir-news-content">
        <li>
            <div class="information">
                <h5>IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6>2019년 10월 10일</h6>
            </div>
        </li>
        <li>
            <div class="image">
                <img
                    width="100%"
                    src="../assets/img/ir_image_01.png"
                />
            </div>
            <div class="information">
                <h5>IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6>2019년 10월 10일</h6>
            </div>
        </li>
        <li>
            <div class="image">
                <img
                    width="100%"
                    src="../assets/img/ir_image_02.png"
                />
            </div>
            <div class="information">
                <h5>IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6>2019년 10월 10일</h6>
            </div>
        </li>
        <li>
            <div class="information">
                <h5>IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6>2019년 10월 10일</h6>
            </div>
        </li>
        <li>
            <div class="image">
                <img
                    width="100%"
                    src="../assets/img/ir_image_03.png"
                />
            </div>
            <div class="information">
                <h5>IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6>2019년 10월 10일</h6>
            </div>
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

export default {
  name: 'HomeIrNews',
  components: {
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeIrNews {
    padding: 50px 0;

    .ir-news-content {
        margin-top: 70px;
        list-style: none;

        li {
            padding-top: 70px;
            padding-bottom: 30px;
            border-bottom: 1px solid #1B1D20;
            display: flex;
            justify-content: space-between;

            &:first-child {
                border-top: 1px solid #1B1D20;
            }

            & .image {
                flex-basis: 274px;
                flex-shrink: 0;
            }
            & .information {
                flex-basis: calc(100% - 274px);
                padding-left: 41px;

                & h5 {
                    color: $brand-color;
                    font-weight: bold;
                    font-size: 16px;
                }
                & h4 {
                    font-size: 21px;
                    letter-spacing: -0.5px;
                    color: #1B1D20;
                    margin-top: 14px;
                }
                & h6 {
                    font-size: 12px;
                    letter-spacing: -0.5px;
                    color: #8E8E93;
                    margin-top: 22px;
                }
            }
        }
    }

    @media ( max-width: 899px ) {
        padding: 44px 0;
        border-top: 8px solid #EFEFF4;

        .ir-news-content {
            margin-top: 30px;
            list-style: none;
            padding: 0 16px;

            li {
                padding-top: 30px;
                padding-bottom: 20px;
                border-top: 1px solid #1B1D20;
                border-bottom: 1px solid #1B1D20;
                display: block;
                justify-content: space-between;

                & .image {
                    height: 138px;
                    overflow: hidden;
                    flex-basis: 274px;
                    flex-shrink: 0;
                    margin-bottom: 14px;
                }
                & .information {
                    flex-basis: calc(100% - 274px);
                    padding-left: 0;

                    & h5 {
                        color: $brand-color;
                        font-weight: bold;
                        font-size: 10px;
                    }
                    & h4 {
                        font-size: 16px;
                        letter-spacing: -0.5px;
                        color: #1B1D20;
                        margin-top: 14px;
                    }
                    & h6 {
                        font-size: 10px;
                        letter-spacing: -0.5px;
                        color: #8E8E93;
                        margin-top: 22px;
                    }
                }
            }
        }
    }
}
</style>
