import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showm: false
  },
  mutations: {
    menu(state) {
      if (state.showm == false) {
        state.showm = true
      } else {
        state.showm = false
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
