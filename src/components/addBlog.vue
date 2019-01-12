<template>
  <div>
    <div id="add-blog">
      <h2>Add a new Blog!</h2>
      <form>
        <label>Blog Title: </label>
        <input type="text" v-model.lazy="blog.title" placeholder="title" />
        <label>Blog Content: </label>
        <textarea type="text" v-model.lazy="blog.content" placeholder="content"></textarea>
        <div id="checkboxes">
          <label>Doctor</label>
          <input type="checkbox" value="doctor" v-model="blog.categories"/>
          <label>Donna</label>
          <input type="checkbox" value="donna" v-model="blog.categories"/>
          <label>River</label>
          <input type="checkbox" value="river" v-model="blog.categories"/>
          <label>Tardis</label>
          <input type="checkbox" value="tardis" v-model="blog.categories"/>
        </div>
        <select v-model="blog.best">
          <option v-for="one in all">
            {{one}}
          </option>
        </select>
      </form>
      <div id="preview">
        <h3>Blog preview</h3>
        <p>Blog title: {{ blog.title }}</p>
        <p>Blog content: </p>
        <p>{{ blog.content }}</p>
        <p>Blog categories: </p>
        <ul>
          <li v-for="category in blog.categories">
            {{ category }}
          </li>
        </ul>
        <p>Best:</p>
        <h1>{{blog.best}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
      },
      all: ['Joddie Whittaker', 'Peter Capaldi', 'Matt Smith', 'David Tennant'],
    }
  },
  methods: {
  },
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>
