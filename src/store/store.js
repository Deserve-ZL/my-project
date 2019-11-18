import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user_name: "",
    user_id: ""
  },
  mutations: {
    getUserName(state, n) {
      state.user_name = n;
    },
    getUserId(state, n) {
      state.user_id = n;
    }
  }
})

export default store;