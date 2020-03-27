import Vue from 'vue'
import App from './App'
//router
import router from './router/index'
//vuex
import store from './store/index'
//element
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
//video-player
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)
//axios
import axios from 'axios'
Vue.prototype.$axios = axios
//localStorage
import storage from './store/storage'
Vue.prototype.$localStorage = storage
//proxy base url
Vue.prototype.$api = process.env.API_HOST
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.afterEach((to, from)=>{
  if(to.name === 'Play' || to.name === 'ViewMd' || to.name === 'House'){
    storage.set('show', false)
  }else{
    storage.set('show', true)
  }
  if(to.meta.title){
    document.title = to.meta.title
  }
})

