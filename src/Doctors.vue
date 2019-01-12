<template>
  <ul>
    <li v-for="doctor in doctors">
      {{doctor}}
    </li>
  </ul>
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
