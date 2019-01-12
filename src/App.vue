<template>
  <div>
    <app-header :title="title" @changeTitle="updateTitle($event)"></app-header>
    <doctors :doctors="doctors"></doctors>
    <app-footer :title="title"></app-footer>
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
      title: 'Doctor'
    }
  },
  methods: {
    updateTitle: function(newTitle){
      this.title = newTitle;
    },
  },
}
</script>

<style>
  h1{
    color: green;
  }
</style>
