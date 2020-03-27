<template>
    <div class="dev-content">
      <div class="dev-item" v-for="(item, index) in this.$store.state.devList" v-loading="loading(index)">
        <span class="dev-text">{{item.title}}</span>
        <img class="dev-img" :src="item.img" alt="..." @load="load(index)">
        <a class="dev-button" :href="item.url">{{item.title}}下载</a>
      </div>
    </div>
</template>

<script>
    export default {
      name: "DevTools",
      data(){
        return{
          refList:[]
        }
      },
      mounted(){
        this.initLoad()
        this.$store.commit('refreshDev')
      },
      methods:{
        //copyed cod
        initLoad(){
          let timer = ''
          timer = setTimeout(()=>{
            this.$store.state.devList.map((item, index)=>{
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
        }
      }
    }
</script>

<style scoped>
  .dev-content{
    background-position: top;
    background-repeat: no-repeat;
    padding: 2px 10px 10px 10px;
    text-align: center;
  }
  .dev-item{
    background-color: #fff;
    border-radius: 3px;
    margin: 8px;
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    height: 272px;
  }
  .dev-text{
    color: grey;
  }
  .dev-img{
    display: block;
    width: 95%;
    height: 65%;
    padding: 15px;
  }
  .dev-button{
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 35px;
    border-radius: 2px;
    background-color: rgb(255, 108, 55);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    text-decoration: none;
    font-size: 14px;
    line-height: 35px;
    color: #fff;
  }
  .dev-button:active{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
  }
</style>
