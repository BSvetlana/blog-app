<template>
  <div>
      <main role="main">
          
      <div class="container mt-4">
          <div class="row">
        <div class="col-md-4" v-for="(post,index) in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p class="ellip">{{ post.text }}</p>
            <span class="badge">Number of comments: {{post.comments.length}}</span>
            <p><router-link  class="btn btn-secondary"
                            :to="{name: 'posts-details', params: {id: post.id}}"
                             role="button">View Posts &raquo;</router-link>
            </p>
            <p>
                <router-link style="color: black; text-decoration:none  " :to="{name: 'edit', params: { id: post.id }}">
                    <button class="btn btn-outline-secondary">Edit Post</button>
                </router-link>
            </p>
            <button class="btn btn-outline-danger btn-sm" @click="deletePost(post.id,index)">Delete</button>
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
  },
  methods: {
      deletePost(id,index) {
          posts.delete(id)
          .then((success) => {
             this.posts.splice(index,1)
          })
      }
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


