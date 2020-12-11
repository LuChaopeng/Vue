import Vue from 'vue'
import Router from 'vue-router'
import HW from '@/components/HelloWorld'    /*这个名字可以自定义 */

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/url',   /*浏览器url*/
      name: 'HellWorld',  /*内部使用的名字，暂时不用*/
      component: HW /*对应的vue页面*/
    }
  ]
})
