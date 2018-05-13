<template>
    <div>
        <form @submit.prevent="onComment">   
            <div class="form-group">
                <label for="textarea" class="control-label col">Add Comment</label> 
                <div class="col">
                    <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control" v-model="comment.text" required="required"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <div class="offset col-8">
                     <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div> 

</template>

<script>
import { posts } from '../services/posts'
export default {
    data() {
        return {
            comment: {
                text: ''
            }
        }
    },
    methods: {
        onComment() {
            posts.addComment(this.comment,this.$route.params.id)
            this.comment = {}
            this.$router.push('/posts')
        }
    }
}
</script>

<style>

</style>


