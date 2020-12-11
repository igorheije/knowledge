import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEporarios
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Iklnb3IgSGVpamUgTS4iLCJlbWFpbCI6ImhlaWplQGhvdG1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNzM1OTM5MCwiZXhwIjoxNjA3NDQ1NzkwfQ.8pluxKmR6fNdUw4Sek9mNCRJziBMixbjpbrz7GOoYWY'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')