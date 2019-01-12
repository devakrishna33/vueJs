<template>
  <div>
    <h1>List of doctors!</h1>
    <ul>
      <li v-for="doctor in doctors">
        {{doctor}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        doctors: ['Joddie Whittaker', 'Peter Capaldi', 'Matt Smith', 'David Tennant'],
      }
    }
  };
</script>

<style scoped>
  h1{
    color: red;
  }
</style>
