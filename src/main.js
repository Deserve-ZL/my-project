import Vue from 'vue'
import App from './App'
import router from './router/router'

import axios from 'axios'
Vue.prototype.$axios = axios
// 打包程序，设置请求域名端口
// axios.defaults.baseURL = 'http://192.168.137.1:3000/';

Vue.config.productionTip = false
// 按需导入vant组件
import { Tabbar, TabbarItem, NavBar, Tab, Tabs, Swipe, SwipeItem, Lazyload, NoticeBar, Button, Uploader, Field, Divider, Cell, CellGroup, Toast, List, Card, Image, Tag, Grid, GridItem, Icon, Popup, NumberKeyboard, Picker, Notify, Checkbox, CheckboxGroup, SubmitBar, RadioGroup, Radio, AddressList, AddressEdit, Area, Row, Col, Step, Steps, Collapse, CollapseItem, PasswordInput, Switch } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Lazyload).use(NoticeBar).use(Button).use(Uploader).use(Field).use(Divider).use(Cell).use(CellGroup).use(Toast).use(List).use(Card).use(Image).use(Tag).use(Grid).use(GridItem).use(Icon).use(Popup).use(NumberKeyboard).use(Picker).use(Notify).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(RadioGroup).use(Radio).use(AddressList).use(AddressEdit).use(Area).use(Row).use(Col).use(Step).use(Steps).use(Collapse).use(CollapseItem).use(PasswordInput).use(Switch);

// 过滤器，时间格式化
import dateFormat from './assets/data'
Vue.filter("formatDate", function (time) {
  let date = new Date(time);
  return dateFormat.formatDate(date, "yyyy-MM-dd hh:mm");
})
// 导入Vuex
import store from './store/store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
