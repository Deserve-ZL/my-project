import Vue from 'vue'
import Router from 'vue-router'

import demo from '@/components/tabbar/demo'
// tabbar导航
import Home from '@/components/tabbar/Home'
import Publish from '@/components/tabbar/Publish'
import Chat from '@/components/tabbar/Chat'
import MineInfo from '@/components/tabbar/MineInfo'
// 物品详情页
import goodsInfo from '@/components/goods/goodsInfo'
// 购买页
import goodsBuy from '@/components/goods/goodsBuy'

// 地址管理
import addressManage from '@/components/users/addressManage'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'Home', component: Home },
    { path: '/publish', name: 'Publish', component: Publish },
    { path: '/chat', name: 'Chat', component: Chat },
    { path: '/mineinfo', name: 'MineInfo', component: demo },
    
    { path: '/home/goodsinfo/:id', name: 'goodsInfo', component: goodsInfo },
    { path: '/home/goodsBuy/:id', name: 'goodsBuy', component: goodsBuy },

    { path: '/mineinfo/address', name: 'addressManage', component: addressManage },
  ]
})
