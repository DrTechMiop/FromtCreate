import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from './Layout.vue'
import Catalog from './pages/Catalog.vue'
import Main from './pages/Main.vue'
import CreatePost from './pages/CreatePost.vue'

import './style.css'

const routes = [
  { path: '/', component: Main },
  { path: '/catalog', component: Catalog },
  { path: '/create-post', component: CreatePost },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(Layout).use(router).mount('#app')
