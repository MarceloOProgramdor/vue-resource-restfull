import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import routes from "./routes/index"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({

  mode : 'history',
  routes

})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
