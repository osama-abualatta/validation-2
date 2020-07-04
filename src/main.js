import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./rules";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import axios from 'axios';
import Vuex from 'vuex'
 
Vue.use(Vuex)
Vue.use(axios);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false;
new Vuex.Store({
state:{
  counter:0
}
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
