import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './components/AppPosts.vue'
import SinglePost from './components/SinglePost.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/posts', name: 'home'},
    {path: '/posts', component: AppPosts, name: 'posts'},
    {path: '/posts/:id', component: SinglePost, name: 'posts-details'}
]

export const router = new VueRouter({
    mode: 'history',
    routes
})