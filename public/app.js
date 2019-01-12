let one = new Vue({
  el: "#app-one",
  data: {
    title: "App one"
  },
  methods: {
    greet: function(){
      return "Hello from App one :)";
    }
  },
  computed: {

  },
  watch: {

  },
});


let two = new Vue({
  el: "#app-two",
  data: {
    title: "App two",
  },
  methods: {
    greet: function(){
      return "Hello from App two :)";
    },
    changeTitle: function(){
      one.title = "App one with changed title"
    }
  },
  computed: {

  },
  watch: {

  },
});
