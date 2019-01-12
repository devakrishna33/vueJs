new Vue({
  el: "#app",
  data: {
    name: "Doctor",
  },
  methods: {
    greet: function(time){
      return "Good " + time + " " + this.name;
    },
  },
});
