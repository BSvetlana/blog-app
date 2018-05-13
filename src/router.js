import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './components/AppPosts.vue'
import SinglePost from './components/SinglePost.vue'
import AddPosts from './components/AddPosts.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/posts', name: 'home'},
    {path: '/posts', component: AppPosts, name: 'posts'},
    {path: '/posts/:id', component: SinglePost, name: 'posts-details'},
    {path: '/add-post', component: AddPosts, name: 'add-post'},
    {path: '/edit/:id', component: AddPosts, name: 'edit'}
]

export const router = new VueRouter({
    mode: 'history',
    routes
})