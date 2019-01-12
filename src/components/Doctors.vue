<template>
  <div id="doctors">
    <ul>
      <li v-for="doctor in doctors" @click="doctor.show = !doctor.show">
        <h2>{{doctor.name}}</h2>
        <h3 v-show="doctor.show">{{doctor.speciality}}</h3>
      </li>
    </ul>
    <button type="button" @click="deleteDoctor">Delete Doctor</button>
  </div>
</template>

<script>
  export default{
    props: {
      doctors: {
        type: Array,
        required: true,
      }
    },
    data(){
      return{

      }
    },
    methods: {
      deleteDoctor: function(){
        this.doctors.pop();
      }
    }
  };
</script>

<style scoped>
#doctors{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
