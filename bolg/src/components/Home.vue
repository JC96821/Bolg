<template>
  <div>
    <header class="header-content" v-if="this.$localStorage.get('show')">
      <div class="drawer-left el-icon-s-operation" @click="drawerOpen"></div>
      <el-input v-model="val" clearable>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <button class="hdr-button" @click="search()">搜索</button>
    </header>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <el-drawer
      size="65%"
      :visible.sync="drawer"
      direction="ltr"
      :show-close="false">
      <header slot="title" class="drawer-header">目录</header>
      <main>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
          <el-menu-item index="/Video" @click="drawerClose">
            <i class="el-icon-video-camera">&nbsp;&nbsp;&nbsp;视频资源</i>
          </el-menu-item>
          <el-menu-item index="/Learn" @click="drawerClose">
            <i class="el-icon-document">&nbsp;&nbsp;&nbsp;学习笔记</i>
          </el-menu-item>
          <el-menu-item index="/DevTools" @click="drawerClose">
            <i class="el-icon-download">&nbsp;&nbsp;&nbsp;工具下载</i>
          </el-menu-item>
          <el-menu-item index="/House" @click="drawerClose">
            <i class="el-icon-house">&nbsp;&nbsp;&nbsp;主页</i>
          </el-menu-item>
        </el-menu>
      </main>
    </el-drawer>
  </div>
</template>

<script>
    export default {
      name: "Home",
      data(){
        return{
          val:'',
          showSearch:true,
          drawer:false
        }
      },
      methods:{
        drawerOpen(){
          this.drawer = true
        },
        drawerClose(){
          this.drawer = false
        },
        //查询
        search(){
          //区分当前路由
          let name = this.$route.name
          //视频下搜索
          if(name == 'Video'){
            this.$store.commit('searchVideo', this.val)
          }else if(name == 'Learn'){
            this.$store.commit('searchMarkdown', this.val)
          }else if(name == 'DevTools'){
            this.$store.commit('searchDevTools', this.val)
          }
        }
      }
    }
</script>

<style scoped>
  .header-content{
    position:fixed;
    background-color: #fff;
    width: 100%;
    height: 40px;
    top:0;
    text-align: center;
    padding: 5px 0 5px 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .main-content{
    margin-top: 50px;
  }
  .drawer-left{
    float: left;
    margin: 12px 0 0 15px;
  }
  .hdr-button{
    border: 0;
    background-color: transparent;
    font-size: 15px;
    color: rgb(255, 108, 55);
    outline: 0;
  }
  .el-input{
    width: 200px;
  }
  .el-menu-item.is-active {
    color: rgb(255, 108, 55);
    background-color: rgba(0,0,0,.1);
  }
  .drawer-header{
    font-size: 20px;
    color: rgb(255, 108, 55);
  }
</style>
