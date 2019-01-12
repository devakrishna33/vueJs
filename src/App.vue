<template>
  <div>
    <app-header></app-header>
    <doctors :doctors="doctors"></doctors>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Doctors from './components/Doctors.vue';

export default {
  components: {
    'app-header': Header,
    'doctors': Doctors,
    'app-footer': Footer,
  },
  data () {
    return {
      doctors: [
        {name: 'Joddie Whittaker', speciality: 'Building', show: false, },
        {name: 'Peter Capaldi', speciality: 'Rage', show: false, },
        {name: 'Matt Smith', speciality: 'Running', show: false, },
        {name: 'David Tennant', speciality: 'Hair', show:false, },
      ],
    }
  },
}
</script>

<style>
  h1{
    color: green;
  }
</style>
