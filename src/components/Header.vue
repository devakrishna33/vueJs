<template>
  <div>
    <header>
      <h1 @click='changeTitle()'>{{title}}</h1>
    </header>
  </div>
</template>

<script>
export default{
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
    };
  },
  methods: {
    changeTitle: function() {
      this.$emit('changeTitle', 'Doctor Who?!');
    }
  }
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
