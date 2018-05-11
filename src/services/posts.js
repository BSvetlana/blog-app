import axios from 'axios'

export default class Posts {

    constructor() {
        axios.defaults.baseURL = "http://localhost:3000/api/"
    }

    getAll() {
        return axios.get('posts')
    }

     get(id) {
         return axios.get(`posts/${id}`)
     }

     addPosts(newPosts){
         return axios.put('posts',newPosts)
     }
}

export const posts = new Posts()