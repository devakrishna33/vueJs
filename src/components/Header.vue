<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
  </div>
</template>

<script>
export default{
  data(){
    return {
      title: 'Doctors'
    };
  },
}
</script>

<style scoped>
  header{
    background-color: lightgreen;
    padding:10px;
  }
  h1{
    text-align: center;
    color: #222;
  }
</style>
