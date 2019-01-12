<template>
  <div>
    <header>
      <h1 @click='changeTitle()'>{{title}}</h1>
    </header>
  </div>
</template>

<script>
import { bus } from '../main';

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
      this.title = "Doctor Who?!";
      bus.$emit('changeTitle', 'Doctor Who?!');
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
