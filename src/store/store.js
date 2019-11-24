import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user_name: "",
    user_id: "",
    orderList_len:""
  },
  mutations: {
    getUserName(state, n) {
      state.user_name = n;
    },
    getUserId(state, n) {
      state.user_id = n;
    },
    getOrderList_len(state,n){
      state.orderList_len = n;
    }
  }
})

export default store;