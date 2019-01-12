import Vue from 'vue'
import App from './App.vue'
import Doctors from './Doctors.vue'

Vue.component('doctors', Doctors);

new Vue({
  el: '#app',
  render: h => h(App)
})
