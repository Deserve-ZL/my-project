import Vue from 'vue'
import App from './App'
import router from './router/router'

Vue.config.productionTip = false

import { Tabbar, TabbarItem, NavBar, Tab, Tabs, Swipe, SwipeItem, Lazyload, NoticeBar, Button, Uploader, Field, Divider, Cell, Toast, List,Card ,Image,Tag } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Lazyload).use(NoticeBar).use(Button).use(Uploader).use(Field).use(Divider).use(Cell).use(Toast).use(List).use(Card).use(Image).use(Tag);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
