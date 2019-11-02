import Vue from 'vue'
import App from './App'
import router from './router/router'

import axios from 'axios'
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://127.0.0.1:3000/';



Vue.config.productionTip = false

import { Tabbar, TabbarItem, NavBar, Tab, Tabs, Swipe, SwipeItem, Lazyload, NoticeBar, Button, Uploader, Field, Divider, Cell,CellGroup, Toast, List, Card, Image, Tag, Grid, GridItem, Icon,Popup,NumberKeyboard ,Picker,Notify,Checkbox,CheckboxGroup,SubmitBar,RadioGroup,Radio,AddressList,AddressEdit,Area,Row,Col } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Lazyload).use(NoticeBar).use(Button).use(Uploader).use(Field).use(Divider).use(Cell).use(CellGroup).use(Toast).use(List).use(Card).use(Image).use(Tag).use(Grid).use(GridItem).use(Icon).use(Popup).use(NumberKeyboard).use(Picker).use(Notify).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(RadioGroup).use(Radio).use(AddressList).use(AddressEdit).use(Area).use(Row).use(Col);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
