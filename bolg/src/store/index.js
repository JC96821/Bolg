import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    baseUrl:'',
    //视频资源数据
    initVideoList:[],
    videoList:[],
    //markdown资源数据
    initMdList:[],
    mdList:[],
    //开发工具资源数据
    initDevList:[],
    devList:[]
  },
  mutations:{
    //初始化资源数据
    initResource(state, data){
      state.baseUrl = data.url
      this.commit('initVideo', data.video)  //初始化视频资源
      this.commit('initMarkdown', data.md)  //初始化markdown资源
      this.commit('initDev', data.dev)      //初始化开发者工具资源
    },
    //初始化视频数据
    initVideo(state, data){
      let list = []
      data.map((item, index)=>{
        list.push({
          video: `${state.baseUrl}/video/${item.title}.mp4`,
          img: `${state.baseUrl}/video_img/${item.title}.jpg`,
          title: item.title,
          time: item.time,
          class: item.class,
          info: item.info
        })
      })
      state.initVideoList = list
      state.videoList = list
    },
    //画面刷新时调用重置信息
    refreshVideo(state){
      state.videoList = state.initVideoList
    },
    //查询视频
    searchVideo(state, val){
      if(val === ''){
        state.videoList = state.initVideoList
        return
      }
      let list = []
      state.initVideoList.map((item, index)=>{
        if(item.title.indexOf(val) > -1){
          list.push(item)
        }
      })
      state.videoList = list
    },

    //初始化markdown数据
    initMarkdown(state, data){
      let list = []
      data.map((item, index)=>{
        list.push({
          img: `${state.baseUrl}/markdown_img/${item.title}.jpg`,
          md: `/bolg resource/markdown/${item.title}.md`,
          title: item.title,
          class: item.class,
          info: item.info
        })
      })
      state.initMdList = list
      state.mdList = list
    },
    //画面刷新时调用重置信息
    refreshMarkdown(state){
      state.mdList = state.initMdList
    },
    //查询markdown
    searchMarkdown(state, val){
      if(val === ''){
        state.mdList = state.initMdList
        return
      }
      let list = []
      state.initMdList.map((item, index)=>{
        if(item.title.indexOf(val) > -1){
          list.push(item)
        }
      })
      state.mdList = list
    },

    //初始化开发工具数据
    initDev(state, data){
      let list = []
      data.map((item, index)=>{
        list.push({
          img: `${state.baseUrl}/dev_img/${item.title}.jpg`,
          title: item.title,
          url: item.url
        })
      })
      state.initDevList = list
      state.devList = list
    },
    //画面刷新时调用重置信息
    refreshDev(state){
      state.devList = state.initDevList
    },
    //查询下载资源数据
    searchDevTools(state, val){
      if(val === ''){
        state.devList = state.initDevList
        return
      }
      let list = []
      state.initDevList.map((item, index)=>{
        if(item.title.indexOf(val) > -1){
          list.push(item)
        }
      })
      state.devList = list
    }
  },
  getters:{

  },
  actions:{

  }
})

export default store
