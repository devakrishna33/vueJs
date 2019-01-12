<template>
  <div>
    <keep-alive>
      <component :is="formType"></component>
    </keep-alive>
    <button @click="formType='login'">Change to login</button>
    <button @click="formType='complaint'">Change to complaint</button>
  </div>
</template>

<script>
import Login from './components/login.vue';
import Complaint from './components/complaint.vue';

export default {
  components: {
    'login': Login,
    'complaint': Complaint,
  },
  data() {
    return {
      formType: 'login',
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
