new Vue({
  el: "#app",
  data: {
    name: "Doctor",
  },
  methods: {
    greet: function(time){
      return "Hello " + this.name;
    },
  },
});
