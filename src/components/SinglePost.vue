<template>
  <div>
           
        <div class="container mt-4">
            <div class="row">
                <div class="col">
                    <h2>{{ posts.title }}</h2>
                    <p>{{ posts.text }}</p>
                </div>
            </div>
        </div>
                
  </div>
</template>

<script>
import AppPosts from '../components/AppPosts'
import { posts } from '../services/posts'

export default {
    components: {
        AppPosts
    },
    data() {
        return {
            posts: []
        }
    },
    created(){
    this.$route.params.id && posts.get(this.$route.params.id)
        .then((response) => {
          this.posts = response.data     
         })
  }
}
</script>

<style>

</style>


