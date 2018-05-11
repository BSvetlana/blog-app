<template>
  <div>
      <main role="main">
          
      <div class="container mt-4">
          <div class="row">
        <div class="col-md-4" v-for="post in posts" :key="post">
            <h2>{{ post.title}}</h2>
            <p>{{ post.text}}</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
        </div>
          </div>
          
        
      
      </main>
  </div>
</template>

<script>
import { posts } from '../services/posts'

export default {
  data() {
      return {
          posts: []
      }
  },
  created(){
      posts.getAll()
      .then((response) => {
          this.posts = response.data
          console.log(this.posts)
      })
      .catch((error) => {
          console.log(error)
      })
  }
}
</script>

<style>

</style>


