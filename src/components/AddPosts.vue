<template>
  <div>
    <div class="container mt-3 mr-1">
        <div class="row">
            <div class="col-8 mb-4">
                <h4>Add Posts</h4>
                    <form @submit.prevent="submit">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" placeholder="title ..." v-model="newPosts.title" required="required" minlength="2">
                    </div>

                    <div class="form-group">
                        <label for="text">Posts text</label>
                        <textarea class="form-control" id="text" placeholder="text ..." v-model="newPosts.text" required="required" maxlength="300"></textarea>
                    </div>
                    <button type="submit" class="btn btn-secondary">Submit</button>
                    <button @click="reset" type="button" class="btn btn-outline-secondary">Reset</button>
                    </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { posts } from '../services/posts'

export default {
  data() {
      return {
          newPosts: {
              title:'',
              text: ''
          }
      }
  },
      created() {
      this.$route.params.id && posts.get(this.$route.params.id)
        .then((response) => {
          this.newPosts = response.data     
         })
    },
  methods: {
      submit(){
          posts.addPosts(this.newPosts)
             .then((response) => {
                 this.$router.push({name: 'posts'})
             })
             .catch((error) => {
                 console.log(error)
             })
      },
      reset(){
          this.newPosts = {}
      },
      editPost() {
        posts.edit(this.$route.params.id, this.newPost)
          .then((response) => {
            this.$router.push('/posts')
          }).catch((error) => {
            console.log('error')
          })
  
      }
      
  }
}
</script>

<style>

</style>


