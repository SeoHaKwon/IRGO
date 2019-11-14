<template>
  <div class="HomeDisclosure">
    <div class="contaner">
      <h2>공시</h2>
      <ul class="performance-Ir-new">
        <li>
          <div class="performance-Ir-new-title">
            <h4>전환가액의조정</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
        <li>
          <div class="performance-Ir-new-title">
            <h4>전환가액의조정</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
        <li>
          <div class="performance-Ir-new-title">
            <h4>전환가액의조정</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
        <li>
          <div class="performance-Ir-new-title">
            <h4>전환가액의조정</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
        <li>
          <div class="performance-Ir-new-title">
            <h4>전환가액의조정</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
        <li>
          <div class="performance-Ir-new-title">
            <h4>전환가액의조정</h4>
            <h5>19. 10. 20</h5>
          </div>
          <img 
            width="30px" 
            src="../assets/img/ic_IR_new_arrow.png" 
          />
        </li>
      </ul>
      <div class="home-more-btn">
          <button
            type="button"
            class=""
          >
          <h6>more</h6>
          <img 
            class="ic_disclosure-arrow"
            width="20px" 
            src="../assets/img/ic_disclosure.png" 
          />
        </button>
      </div>
    </div>  	
  </div>
</template>

<script>

export default {
  name: 'HomeDisclosure',
  components: {
  }
}
</script>
<style lang="scss">
.HomeDisclosure {
  background: #F8F8FA;
  padding: 120px 0;

  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    padding: 25px 0;
    border-bottom: 2px solid #000;
  }
  .performance-Ir-new {

    & li {
      padding: 35px;
      border-bottom: 1px solid #E6E6E6;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & img {
        flex-basis: 30px;
      }
      .performance-Ir-new-title {
        flex-basis: calc(100% - 30px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 30px;

        & h4 {
          font-size: 18px;
        }
        & h5 {
          color: #bbb;
          font-size: 16px;
        }
      }
    }
  }
  .ic_disclosure-arrow {
    transform: rotate(0);
  }
}
</style>
