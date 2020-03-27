import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes:[
    {
      path:'/',
      name:'Home',
      redirect:'/House'
    },
    {
      path:'/House',
      name:'House',
      component: () => import('../components/House'),
      meta:{
        title:'JC的个人网站/主页'
      }
    },
    {
      path:'/Video',
      name:'Video',
      component: () => import('../components/Video'),
      meta:{
        title:'JC的个人网站/视频资源'
      }
    },
    {
      path: '/Video/Play',
      name: 'Play',
      component: () => import('../subcomponents/Play'),
      meta:{
        title:'JC的个人网站/视频播放'
      }
    },
    {
      path:'/Learn',
      name:'Learn',
      component: () => import('../components/Learn'),
      meta:{
        title:'JC的个人网站/学习笔记'
      }
    },
    {
      path:'/Learn/ViewMd',
      name:'ViewMd',
      component: () => import('../subcomponents/ViewMd'),
      meta:{
        title:'JC的个人网站/笔记一览'
      }
    },
    {
      path: '/DevTools',
      name: 'DevTools',
      component: () => import('../components/DevTools'),
      meta: {
        title: 'JC的个人网站/开发工具'
      }
    }
  ]
})

export default router
