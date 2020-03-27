<template>
  <div class="video-content">
    <div class="card-item" v-for="(item, index) in $store.state.videoList" @click="play(item)" v-loading="loading(index)">
      <img class="card-img" :src="item.img" @load="load(index)"/>
      <span class="card-text">{{card_name(item.title, 6)}}</span>
      <span class="card-class">{{item.class}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Video",
      data(){
        return{
          refList:[]
        }
      },
      computed:{
        card_name: function(){
          return function (val, index) {
            return val.length>index?`${val.substring(0, index)}...`:val
          }
        }
      },
      mounted(){
        this.$store.commit('refreshVideo')
        this.initLoad()
      },
      methods:{
        //copyed cod
        initLoad(){
          let timer = ''
          timer = setTimeout(()=>{
            this.$store.state.videoList.map((item, index)=>{
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
        //点击视频卡片
        play(val){
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
        }
      }
    }
</script>

<style scoped>
  .video-content{
    padding: 2px 5px 10px 5px;
  }
  .card-item{
    display: inline-block;
    text-align: center;
    width: 45%;
    height: 200px;
    margin: 8px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .card-item:active{
    background-color: rgba(0,0,0,.1);
  }
  .card-text{
    float: right;
    padding: 5px;
    bottom:5px;
    font-size: 12px;
    color: #505050;
  }
  .card-class{
    font-size: 12px;
    color: #C0C4CC;
    float: left;
    padding: 5px;
    bottom:5px;
  }
  .card-img{
    width: 100%;
    height: 160px;
  }
</style>
