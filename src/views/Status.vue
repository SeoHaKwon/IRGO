<template>
  <div class="sub-wrap">
    <div class="sub-visual-wrap">
      <SubVisual/>
      <div class="sub-info-txt">
        <div class="inner">
          <strong class="sub-title">주주현황</strong>
          <div class="history">
            <span class="icon-home">
              <img src="../assets/images/icon/icon_home.png" alt="">
            </span>
            <span>주주현황</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-top">
      <Shareholder/>
    </div>
    <div class="content-bottom">
      <AllocationTable/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import Shareholder from '@/components/Shareholder.vue'
import AllocationTable from '@/components/AllocationTable.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'status',
  components: {
    SubVisual,
    Shareholder,
    AllocationTable,
    Footer
  }
}

</script>
