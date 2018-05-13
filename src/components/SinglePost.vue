<template>
  <div>
        <div class="container mt-4">
            <div class="row">
                <div class="col col-8">
                    <h2>{{ posts.title }}</h2>
                    <p>{{ posts.text }}</p>
                </div>
                
                <div class="col col-10">
                    <add-comment/>
                    <hr>
                    <h4>Comments</h4>
                    <ul class="list-group" v-for="(comment,key) in comments" :key="key">
                        <li class="list-group-item">{{ comment.text}}</li>
                        <hr>
                    </ul>
                </div>
            </div>

        </div>
      
  </div>
</template>

<script>

import AddComment from '../components/AddComment'
import { posts } from '../services/posts'

export default {
    components: {
        
        AddComment
    },
    data() {
        return {
            posts: [],
            comments: []

        }
    },

    created(){
    this.$route.params.id && posts.get(this.$route.params.id)
        .then((response) => {
          this.posts = response.data 
          this.comments = response.data.comments   
         })
  }

}
</script>

<style>

</style>


