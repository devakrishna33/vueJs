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
    changeTitle: function(){
      this.name = "Doctor"
    },
    move: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clicked: function(event){
      this.name = "Amelia Pond";
    }
  },
  computed: {
    reverseName: function(){
      return this.name.split('').reverse().join('');
    },
  }
});
