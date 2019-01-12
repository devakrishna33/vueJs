new Vue({
  el: "#app",
  data: {
    name: "Doctor",
    x: 0,
    y: 0,
  },
  methods: {
    greet: function(time){
      return "Hello " + this.name;
    },
    changeName: function(){
      this.name = "River Song";
    },
    move: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  },
});
