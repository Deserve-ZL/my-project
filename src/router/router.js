import Vue from 'vue'
import Router from 'vue-router'

// tabbar导航
import Home from '@/components/tabbar/Home'
import Publish from '@/components/tabbar/Publish'
import Order from '@/components/tabbar/Order'
import MineInfo from '@/components/tabbar/MineInfo'
// 物品详情页
import goodsInfo from '@/components/goods/goodsInfo'
// 购买页
import goodsBuy from '@/components/goods/goodsBuy'

// 地址管理
import addressManage from '@/components/users/addressManage'
// 收藏列表
import starList from '@/components/users/starList'
// 修改密码
import changePwd from '@/components/users/changePwd'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'Home', component: Home },
    { path: '/publish', name: 'Publish', component: Publish },
    { path: '/order', name: 'Order', component: Order },
    { path: '/mineinfo', name: 'MineInfo', component: MineInfo },
    
    { path: '/home/goodsinfo/:id', name: 'goodsInfo', component: goodsInfo },
    { path: '/home/goodsBuy/:id', name: 'goodsBuy', component: goodsBuy },

    { path: '/mineinfo/address', name: 'addressManage', component: addressManage },
    { path: '/mineinfo/starList', name: 'starList', component: starList },
    { path: '/mineinfo/changepwd', name: 'changePwd', component: changePwd }
  ]
})
