<template>
  <div>
      <main role="main">
          
      <div class="container mt-4">
          <div class="row">
        <div class="col-md-4" v-for="(post,key) in posts" :key="key">
            <h2>{{ post.title }}</h2>
            <p class="ellip">{{ post.text }}</p>
            <p><router-link  class="btn btn-secondary"
                            :to="{name: 'posts-details', params: {id: post.id}}"
                             role="button">View Posts &raquo;</router-link>
            </p>
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
      })
      .catch((error) => {
          console.log(error)
      })
  }
}
</script>

<style>
.ellip{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 500px;
}
</style>


