<template>
    <div class="play-contnt">
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
                     webkit-playsinline="true"
                     x5-video-player-type="h5"
                     x5-video-player-fullscreen="false"
      ></video-player>
      <div class="play-nav">
        <div class="content-item">{{$route.query.title}}</div>
        <div class="content-item content-time">分类:{{$route.query.class}}</div>
      </div>
      <div class="card-item" v-for="(item, index) in filterVideo()" @click="play(item)" v-loading="loading(index)">
        <img class="card-img" :src="item.img" @load="load(index)"/>
        <div class="card-info">
          <header class="card-header">
            <span class="card-title">{{filter_str(item.title, 6)}}</span>
            <span class="card-class">{{item.class}}</span>
          </header>
          <main class="card-main">
            <span>{{filter_str(item.info, 40)}}</span>
          </main>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Play",
      data(){
          return{
            playerOptions : {
              playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
              autoplay: false, //如果true,浏览器准备好时开始回放。
              muted: false, // 默认情况下将会消除任何音频。
              loop: true, // 导致视频一结束就重新开始。
              preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
              language: 'zh-CN',
              aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
              fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
              sources: [{
                type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                src: "" //url地址
              }],
              poster: "", //你的封面地址
              notSupportedMessage: '此视频暂无法播放', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
              controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                fullscreenToggle: true  //全屏按钮
              }
            },
            videoInfo:{},
            refList:[]
          }
      },
      computed:{
        filter_str:function () {
          return function (val, index) {
            return val.length > index ? `${val.substring(0, index)}...` : val
          }
        }
      },
      mounted(){
        this.init()
        this.initLoad()
      },
      methods:{
        //copyed cod
        initLoad(){
          let timer = ''
          timer = setTimeout(()=>{
            this.filterVideo().map((item, index)=>{
              this.refList.push({key: index, val:true})
            })
            clearTimeout(timer)
          }, 200)
        },
        //copyed cod
        load(index){
          let timer = ''
          timer = setTimeout(() => {
            this.refList[index].val = false
            clearInterval(timer);
          }, 200)
        },
        //copyed cod
        loading(index){
          try {
            return this.refList[index].val
          }catch (e) {

          }
        },
        //数据初期化
        init(){
          this.getSrc(this.$route.query.video)
        },
        //卡片列表刷新
        filterVideo(){
          let list = []
          this.$store.state.initVideoList.map((item, index)=>{
            if(item.title != this.$route.query.title){
              list.push(item)
            }
          })
          return list
        },
        //点击下方卡片
        play(val){
          this.getSrc(val.video)
          let url = this.$router.resolve({
            path: "/Video/Play",
            query: {
              video: val.video,
              img: val.img,
              title: val.title,
              class: val.class,
              time: val.time,
              info: val.info
            }
          });
          window.open(url .href, '_parent');
        },
        //获取电影资源
        getSrc(val){
          this.playerOptions.sources[0].src = val
        }
      }
    }
</script>

<style scoped>
  .play-contnt{
    position: absolute;
    top: 0;
  }
  .play-nav{
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .content-item{
    display: inline-block;
    padding: 10px;
  }
  .content-time{
    float: right;
    font-size: 14px;
    color: #C0C4CC;
  }
  .card-item{
    display: block;
    background-color: #fff;
    height: 100px;
    margin: 3px;
    padding: 2px 0 2px 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .card-item:active{
    background-color: rgba(0,0,0,.1);
  }
  .card-img{
    display: inline-block;
    width: 50%;
    height: 100px;
  }
  .card-info{
    display: inline-block;
    width: 48%;
    vertical-align: top;
    font-size: 12px;
  }
  .card-header{
    padding: 5px;
    height: 20px;
  }
  .card-title{
    float: left;
    padding-top: 3px;
  }
  .card-class{
    float: right;
    padding: 3px;
    border-radius: 5px;
    color: #505050;
    background-color: #f4f4f4;
    font-size: 6px;
  }
  .card-main{
    padding: 5px;
    height: 50px;
    color: #505050;
    font-size: 10px;
  }

  .video-js .vjs-big-play-button{
    border: none;
  }
</style>
