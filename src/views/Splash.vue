<template>
  <div class='container'>
    <div class='logo'>
      IR GO
      <div class='ment'>
        주주들을 위한 필수 APP!
      </div>
    </div>
    <div class='compname'>
      @IRKUDOS
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container {
    background: linear-gradient( to top, #3974E9, #38CE99);
    height: 768px;
    margin: 0;
  }
  .ment {
    font-size: 0.25em;
    margin-top:4px;
  }
  .logo {
    font-size: 3.5em;
    color: white;
    font-weight: 600;
    padding-top:60%;
  }
  .compname {
    top: 110%;
    left: 50%;
    position:absolute;
    transform: translateX(-50%) translateY(-50%);
    color: white;
  }
</style>
