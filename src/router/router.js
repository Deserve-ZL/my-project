import Vue from 'vue'
import Router from 'vue-router'

// tabbar导航
import Home from '@/components/tabbar/Home'
import Publish from '@/components/tabbar/Publish'
import Order from '@/components/tabbar/Order'
import MineInfo from '@/components/tabbar/MineInfo'

// 用户登录页
import login from '@/components/users/login'
// 物品详情页
import goodsInfo from '@/components/goods/goodsInfo'
// 购买页
import goodsBuy from '@/components/goods/goodsBuy'

// 地址管理
import addressManage from '@/components/users/addressManage'
// 发布列表
import publishList from '@/components/users/publishList'
// 收藏列表
import starList from '@/components/users/starList'
// 修改密码
import changePwd from '@/components/users/changePwd'
import store from '../store/store'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },

    { path: '/home', name: 'Home', component: Home },
    { path: '/publish', name: 'Publish', component: Publish },
    { path: '/order', name: 'Order', component: Order },
    { path: '/mineinfo', name: 'MineInfo', component: MineInfo },

    { path: '/login', name: 'login', component: login },

    { path: '/home/goodsinfo/:id', name: 'goodsInfo', component: goodsInfo },
    { path: '/home/goodsBuy/:id', name: 'goodsBuy', component: goodsBuy },

    { path: '/mineinfo/address', name: 'addressManage', component: addressManage },
    { path: '/mineinfo/publishList', name: "publishList", component: publishList },
    { path: '/mineinfo/starList', name: 'starList', component: starList },
    { path: '/mineinfo/changepwd', name: 'changePwd', component: changePwd }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === "MineInfo") {
    if (store.state.user_name === "") {
      // router.replace("/home")
      router.replace({ name: "login" }).catch(err => {
        console.log(err);
      })

    }
  }
  next()
})

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
export default router;