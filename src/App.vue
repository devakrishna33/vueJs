<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h2>This is the form title!!</h2>
        <p>This is the form description!!!</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="username" required/>
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button type="submit" @click="handleSubmit()">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from './components/formHelper.vue';

export default {
  components: {
    'form-helper': FormHelper,
  },
  data() {
    return {
    }
  },
  methods: {
    handleSubmit: {

    }
  },
}
</script>

<style scoped>

</style>
