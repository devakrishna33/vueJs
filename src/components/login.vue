<template>
  <div>
    <h1>Please fill this form!!!</h1>
    <form>
      <div id="form-header">
        <h2>Login form</h2>
        <p>Use this to login to your account</p>
      </div>
      <div id="form-fields">
        <input type="text" placeholder="username" required/>
        <input type="password" placeholder="password" required />
      </div>
      <button type="submit">Submit</button>
      <div name="useful-links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default{
  data() {
    return {
      
    }
  },
  methods: {

  },
}
</script>

<style scoped>
h1{
    text-align: center;
}
form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
#useful-links ul{
    padding: 0;
}
#useful-links li{
    display: inline-block;
    margin-right: 10px;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>
