<template>
  <div>
    <h1>{{title}}</h1>
    <doctors></doctors>
  </div>
</template>

<script>
import Doctors from './Doctors.vue';
export default {
  components: {
    'doctors': Doctors,
  },
  data () {
    return {
      title: "First Vue app with cli"
    }
  },
}
</script>

<style>
</style>
