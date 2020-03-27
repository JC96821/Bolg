<template>
  <div class="learn-content">
    <div class="card-item" v-for="(item, index) in this.$store.state.mdList" @click="viewMd(item.title, item.md)" v-loading="loading(index)">
      <img class="card-img" :src="item.img" alt="..." @load="load(index)"></img>
      <div class="card-text">
        <h3 class="card-title">{{item.title}}</h3>
        <p class="card-p">{{filter_str(item.info, 25)}}</p>
        <span class="card-class">{{item.class}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Learn",
      data(){
        return{
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
        this.initLoad()
        this.$store.commit('refreshMarkdown')
      },
      methods:{
        //copyed cod
        initLoad(){
          let timer = ''
          timer = setTimeout(()=>{
            this.$store.state.mdList.map((item, index)=>{
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
        viewMd(title, md){
          let url = this.$router.resolve({
            path: "/Learn/ViewMd",
            query:{title:title, md:md}
          });
          window.open(url .href, '_parent');
        }
      }
    }
</script>

<style scoped>
  .learn-content{
    padding: 2px 5px 10px 5px;
  }
  .card-item{
    margin-top: 10px;
    height: 120px;
    margin: 8px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    background-color: #fff;
    border-radius: 3px;
  }
  .card-item:active{
    background-color: rgba(0,0,0,.1);
  }
  .card-img{
    display: inline-block;
    width: 40%;
    height: 100%;
  }
  .card-text{
    display: inline-block;
    width: 55%;
    vertical-align: top;
    font-size: 10px;
    color: gray;
  }
  .card-title{
    display: block;
    height: 20px;
  }
  .card-p{
    display: block;
    height: 35px;
  }
  .card-class{
    float: right;
    padding: 3px;
    border-radius: 5px;
    color: #505050;
    background-color: #f4f4f4;
    font-size: 8px;
  }
</style>
