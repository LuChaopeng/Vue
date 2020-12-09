import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/url',   //浏览器url
      name: 'HellWorld',  //内部使用的名字，暂时不用
      component: HelloWorld //对应的vue页面
    }
  ]
})
