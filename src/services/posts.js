import axios from 'axios'

export default class Posts {

    constructor() {
        axios.defaults.baseURL = "http://localhost:3000/api/"
    }

    getAll() {
        return axios.get('posts?filter={"include":["comments"]}')
    }

     get(id) {
         return axios.get(`posts/${id}?filter={"include":["comments"]}`)
     }

     addPosts(newPosts){
         return axios.put('posts',newPosts)
     }

     edit(id,newPosts){
         return axios.put(`posts/${newPosts.id}`, newPosts)
     }
     
     delete(id){
        return axios.delete(`posts/${id}`)
     }

     addComment(comment,postId) {
         return axios.post(`posts/${postId}/comments`,comment)
         
     }
}

export const posts = new Posts()