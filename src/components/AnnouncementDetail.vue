<template>
  <div class="detail-section">
    <div class="question-title">
      <p>올해 삼성 개발자 콘퍼런스에서 인공지능, 블록체인 기술 등 새로운 기술들에 대한 소개들이 있던데 그 중 중요한 포인트에 
        대한 설명과 향후 시장 진출의 계획을 알고 싶습니다.
    </p>
    </div>
    <div class="datail-inner">
      <div class="top-section">
        <dl class="files">
          <dt>첨부파일</dt>
          <dd class="icon-file pdf">시장조사기관 IDC 보고 .pdf <button type="button" class="file-down"></button></dd>
        </dl>
        <div class="sns-group">
          <a href="#" class="facebook"></a>
          <a href="#" class="twitter"></a>
          <a href="#" class="blog"></a>
          <a href="#" class="talk"></a>
        </div>
      </div>
      <div class="answer-section desc">
        삼성전자가 10월 29~30일 미국 캘리포니아의 산호세 컨벤션센터에서 삼성 개발자 콘퍼런스(SDC19)를 열고, 세계 개발자들에게 혁신기술을 선보인다.<br><br>
        올해 SDC에서는 삼성전자와 각 분야 글로벌 리더들이 나서 인공지능(AI)과 5세대(5G) 네트워크·서비스, 보안까지, 흥미진진한 기술들을 풀어놓을 예정이다.SDC19의 주요 세션을 삼성전자 뉴스룸이 미리 살펴봤다.<br><br>
        <br>
        <strong class="tit">#1. 빅스비</strong><br><br>
        DC19에서는 삼성전자의 개방형 AI 플랫폼, 빅스비(Bixby)로 더욱 쉽고 편리하게 누릴 수 있는 스마트 기기 경험을 확인할 수 있다.
      </div>
      <div class="list-btn">
        <div class="link-box prev">
          <span>이전글</span>
          <p>18년도 브라질 압센과의 아셀렉스 수출계약과 관련해서 계약 이후 1년이내 식약처 허가가 완료되어야 하는데 주주들이 이 
            1년이 도래하는 정확한 시기를 전혀 모르는 상태입니다. 이건 이미 계약한 사항이므로 주주들이 알아도 전혀 문제되지...</p>
          <a href="#" class="link"></a>
        </div>
        <div class="link-box next">
          <span>다음글</span>
          <p>SAMSUNG, 회사실적, 전략, 업황 등 주요경영현황(유럽)</p>
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
  .question-title{
    p{
      @include contentWidth($width:1200px);
      padding:100px 0 100px 50px;
      font-size:24px;
      line-height:36px;
      color:$black3;
      font-weight: 500;
      border-top:2px solid $black3;
      border-bottom:1px solid #ececec;
      @include bgImg(bg/bg_qa_q2,$pos:left center);
    }
  }
  .datail-inner{
    .answer-section{
      @include bgImg(bg/bg_qa_a,$pos:left top);
      padding-left:50px;
      .tit {
        font-size:18px;
        line-height:20px;
        color:$blue;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .question-title  {
      p {
        padding:57px 35px;
        font-size:15px;
        line-height:20px;
        background-size:16.5px 17.5px;
        background-position:left top 60px;
      }
    }
  }
</style>
