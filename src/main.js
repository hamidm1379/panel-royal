import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-select/dist/vue-select.css';
import './assets/css/main.css'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import vSelect from 'vue-select'
Vue.component('date-picker', VuePersianDatetimePicker);
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
})
  .$mount('#app')
