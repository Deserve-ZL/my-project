import Vue from 'vue'
import Router from 'vue-router'

// tabbar导航
import Home from '@/components/tabbar/Home'
import Publish from '@/components/tabbar/Publish'
import Chat from '@/components/tabbar/Chat'
import MineInfo from '@/components/tabbar/MineInfo'
// 物品详情页
import goodsInfo from '@/components/goods/goodsInfo'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'Home', component: Home },
    { path: '/publish', name: 'Publish', component: Publish },
    { path: '/chat', name: 'Chat', component: Chat },
    { path: '/mineinfo', name: 'MineInfo', component: MineInfo },
    
    { path: '/home/goodsinfo/:id', name: 'goodsInfo', component: goodsInfo },
  ]
})
