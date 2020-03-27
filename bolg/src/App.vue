<template>
  <div id="app">
    <Home v-if="show"></Home>
    <div class="not-support" v-if="!show&&!notFound"></div>
    <div class="not-found" v-if="!show&&notFound"></div>
  </div>
</template>

<script>
  import Home from './components/Home'
  export default {
    name: 'App',
    components:{
      Home
    },
    data(){
      return{
        show:true,
        notFound:false
      }
    },
    created(){
      this.$axios.get("http://wx.linktodeal.com/sns/info?app=PDCUGQUBOOUOP5XTP&code="+ localStorage.getItem('wxcode')).then(resp=>{
        console.log(resp.data)
      })

      // function getUserInfo () {
      //   $.ajax({
      //     type: "GET",
      //     url: ,
      //     dataType: "json",
      //     success: function(data){
      //       if (data.code == 0) {
      //         var saveData = JSON.stringify(data.data)
      //         getDomById('name').innerHTML = data.data.nickname
      //         localStorage.setItem('userinfo', saveData)
      //         if (localStorage.getItem('source')) {
      //           getCreateId()
      //         } else {
      //           if (!localStorage.getItem('hasRefresh')) {
      //             checkCreate()
      //           }
      //         }
      //       } else {
      //         alert('服务器开了个小差，请刷新重试')
      //       }
      //     }
      //   });
      // }


      let width = document.documentElement.offsetWidth || document.body.offsetWidth;
      if(width > 450){
        this.show = false;
      }else{
        this.$axios.get(this.$api + '/bolg resource/bolg_tree.json').then(resp=>{
          if(resp.status === 200){
            this.$store.commit('initResource', resp.data)     //初始化资源数据
          }else{
            this.notFound = true
          }
        }).catch(err=>{
          this.show = false;
          this.notFound = true
        })
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
  }
  .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: rgb(255, 108, 55);
  }
  .not-support{
    background-image: url("./assets/img/not-support.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .not-found{
    background-image: url("./assets/img/not-found.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .el-loading-spinner .path {
    -webkit-animation: loading-dash 1.5s ease-in-out infinite;
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90,150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: rgb(255, 108, 55);
    stroke-linecap: round;
  }
</style>
