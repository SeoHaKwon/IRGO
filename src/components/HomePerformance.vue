<template>
  <div class="HomePerformance contaner">
    <h2>실적발표</h2>
    <div class="performance-group">
      <h3>실적발표자료</h3>
      <ul class="performance-group-tab">
        <li class="active">
          <a>19.2Q</a>
        </li>
        <li>
          <a>19.1Q</a>
        </li>
        <li>
          <a>18.4Q</a>
        </li>
        <li>
          <a>18.3Q</a>
        </li>
        <li>
          <a>18.2Q</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePerformance',
  components: {
  }
}
</script>
<style lang="scss">
.HomePerformance {
  padding: 120px 0;

  .contaner {
    width: 1150px;
    margin: 0 auto;
  }

  & h2 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
  .performance-group {
    h3 {
      font-size: 20px;
      text-align: center;
      margin-top: 12px;
    }
    .performance-group-tab {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & li {
        list-style: none;
        flex-basis: 20%;
        width: 20%;
        flex-shrink: 0;
        padding: 25px 0;
        text-align: center;
        font-size: 16px;
        color: #bbb;
        border-bottom: 1px solid #bbb;

        &.active {
          color: #000;
          border-bottom: 2px solid #000;
        }
      } 
    }
  }

}
</style>
