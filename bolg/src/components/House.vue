<template>
  <div class="house-main" v-loading="loading">
    <div v-show="!loading">
      <img src="http://49.235.36.229:5000/bolg%20resource/other_img/house.jpg" alt="..." class="house-back" @load="loaded">
      <img src="../assets/img/blogger.png" alt="..." class="house-img">
      <router-link to="/Learn" class="house-item">JC'S BOLG</router-link>
      <p class="house-info">Hope you enjoy yourself here!</p>
      <p class="house-info">希望你喜欢这里！</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "House",
      data(){
        return{
          loading: true
        }
      },
      methods:{
        loaded(){
          this.loading = false
        }
      }
    }
</script>

<style scoped>
  .house-main{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .house-back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
  }
  .house-img{
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin-top: 150px;
    box-shadow: 0 2px 5px 0 white;
  }
  .house-item{
    display: block;
    text-decoration: none;
    color:#fff;
    border: 1px solid #fff;
    padding: 15px;
    width: 120px;
    margin: 50px auto;
  }
  .house-info{
    color: #fff;
  }
</style>
