<template>
  <div class="detail-section">
    <div class="news-title">
      <div class="news-txt">
       <strong class="category">보도자료</strong>
        <p>
          삼성전자 '중국만을 위한 한정판' 폴더블폰 출격, 시장 재탈환 시동거나
        <span class="date">2019.11.06</span>
        </p>
      </div>
    </div>
    <div class="datail-inner">
      <div class="top-section">
        <dl class="files">
          <dt>첨부파일</dt>
          <dd class="icon-file pdf">시장조사기관 IDC 보고서.pdf <button type="button" class="file-down"></button></dd>
        </dl>
        <div class="sns-group">
          <a href="#" class="facebook"></a>
          <a href="#" class="twitter"></a>
          <a href="#" class="blog"></a>
          <a href="#" class="talk"></a>
        </div>
      </div>
      <div>
        [서울=뉴스핌] 정산호 기자 = 삼성전자가 중국의 5G 상용화에 맞춰 한정판 폴더블 스마트폰을 출시했다. 중국에서만 출시되는 한정판 상품을 통해 현지 시장에서 구축했던  '프리미엄 브랜드' 지위를 재탈환 한다는 전략이다.
        <br>
        <br>
        중국 경제 매체 차이징(財經)에 따르면 삼성전자는 지난 19일 중국 우한(武漢)에서 신제품 발표회를 통해 갤럭시 폴드 5G 모델인 'W20 5G'를 선보였다. 
       </div>
      <div class="list-btn">
        <div class="link-box prev">
          <span>이전글</span>
          <div>
            <strong class="catagory">R자료</strong>
            <p>SAMSUNG, 회사실적, 전략, 업황 등 주요경영현황(유럽)</p>
          </div>
          <a href="#" class="link"></a>
        </div>
        <div class="link-box next">
          <span>다음글</span>
          <div>
            <strong class="catagory">보도자료</strong>
            <p>SAMSUNG, IR Forum</p>
          </div>
          <a href="#" class="link"></a>
        </div>
      </div>
      <div class="btn-wrap center">
        <a href="#" class="box-link back active"><span>목록</span></a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/style/_color.scss";
@import "@/style/_mixin.scss";
  .news-title{
    .category {
      display:block;
      margin-bottom:10px;
      font-size:16px;
      line-height:16px;
      font-weight: 500;
      color:$blue;
    }
    .date {
      position:absolute;
      right:0;
      top:0;
      font-size:17px;
      color:#a9acb3;
    }
    .news-txt{
      position:relative;
      @include contentWidth($width:1200px);
      padding:90px 0 108px 0;
      font-size:24px;
      line-height:36px;
      color:$black3;
      font-weight: 500;
      border-top:2px solid $black3;
      border-bottom:1px solid #ececec;
      p {
        position:relative;
        padding-right:150px;
      }
    }
  }

</style>
