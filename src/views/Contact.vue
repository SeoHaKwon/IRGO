<template>
  <div class="sub-wrap">
    <div class="sub-visual-wrap">
      <SubVisual/>
      <div class="sub-info-txt">
        <div class="inner">
          <strong class="sub-title">IR Contact</strong>
          <div class="history">
            <span class="icon-home">
              <img src="../assets/images/icon/icon_home.png" alt="">
            </span>
            <span>IR Contact</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bottom gray-bg">
      <IrContact/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SubVisual from '@/components/SubVisual.vue'
import IrContact from '@/components/IrContact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'status',
  components: {
    SubVisual,
    IrContact,
    Footer
  },
}

</script>
