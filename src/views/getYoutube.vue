<template>
  <div class='composer'>
    <label for="basic-url">Your vanity URL</label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">https://youtu.be/</span>
      </div>
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="url">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" v-on:click="getCont">{{ content }}</button>
      </div>
    </div>
    <div>
      채널이름: {{ chTitle }} <br>
      제목: {{ title }} <br>
      업로드날짜: {{ upload_date }} <br>
      썸네일 : <img v-bind:src='thumbnail.url' v-bind:width="thumbnail.width" v-bind:height="thumbnail.height"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      content: 'GETINFO',
      url: 'ctGmZytmeDE',
      title: '',
      chTitle: '',
      thumbnail: '',
      upload_date: ''
    }
  },
  methods: {
    getConts () {
      const _this = this
      // const request = require('request')
      var config = {
        headers: {
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST',
          'Access-Control-Max-Age': 3600,
          'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization'
        }
      }
      var url = 'http://youtube.com/get_video_info?video_id=' + _this.url
      // request(url, function (error, res, body) {
      //   console.log(body)
      //   console.log(error)
      //   console.log(res)
      // })
      _this.$http.get(`${url}`, config)
        .then((result) => {
          console.log(result)
        })
    },
    getCont () {
      const _this = this
      const baseURI = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${_this.url} &key=AIzaSyCexoo-7gtZ-8anR_KA7wap-oG9KQCGt2A`
      _this.$http.get(`${baseURI}`)
        .then((res) => {
          console.log(res.data.items[0].snippet)
          const requestData = res.data.items[0].snippet
          _this.chTitle = requestData.channelTitle
          _this.title = requestData.title
          _this.thumbnail = requestData.thumbnails.high
          _this.upload_date = requestData.publishedAt
        })
    }
  }
}
</script>

<style>
  .composer {
    width: 50%;
    text-align:center;
    margin: auto auto;
  }
</style>
