<template>
  <div>
    <div class="filebox primary">
      <label for="ex_file">명함업로드</label>
      <input id="ex_file" type="file" accept="image/*" capture="camera" v-on:change="changeImg" />
    </div>
    <div class='resultDiv' v-if="result">
      {{ result }}
    </div>
    <div class="logs" v-if="logs">{{ logs }}</div>
    <div class="warning_contents">
      <span class="warning">※빛이 반사되지 않도록 촬영 부탁드리겠습니다.</span>
    </div>
    <div class="contents">
      현재 핸드폰 번호는 010- 혹은 010. 으로 시작하는 번호만 가져올 수 있습니다.<br>
      그 외의 자주 보이는 형식이 있으시면 의견주시면 검토 후 반영하겠습니다!
    </div>
  </div>
</template>

<script>
import { TesseractWorker } from 'tesseract.js'

export default {
  data: () => {
    return {
      captureImg: '',
      error: null,
      result: '',
      logs: ''
    }
  },
  methods: {
    changeImg: function (e) {
      var _this = this
      _this.logs = ''
      const worker = new TesseractWorker()
      worker.recognize(e.target.files[0])
        .progress(progress => {
          _this.result = (progress.progress * 100).toFixed(0) + '%'
        }).then(result => {
          const Txt = (result.text).replace(/\s/gi, '')
          // 여기에 Txt 가공 데이터 받아오기
          this.$store.dispatch('IMGTOTXT', Txt)
            .then((res) => {
              _this.result = this.$store.getters.getImgToTxt
            })
        })
    }
  },
  errorCaptured (err, vm, info) {
    this.error = `${err.stack}\n\nfound in ${info} of component`
    console.log(this.error)
    return false
  }
}
</script>

<style scoped>
  .warning_contents {
    margin-top: 20px;
  }
  .contents {
    margin-top:20px;
  }
  .warning {
    color: red;
    font-weight: bold;
  }
  .resultDiv {
    margin-top: 20px;
  }
  .logs {
    margin-top: 20px;
  }
  .filebox label {
    display: inline-block;
    padding: .5em .75em; color: #999;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: .25em;
  }
  .filebox input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
  }
  .filebox.primary label {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }
</style>
