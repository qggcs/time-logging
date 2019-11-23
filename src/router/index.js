import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import TaskPersonal from '../components/task/task-personal.vue'
import TaskManagement from '../components/task/task-management.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  children: [{
    path: 'task_personal',
    component: TaskPersonal
  }, {
    path: 'task_management',
    component: TaskManagement
  }]
}, {
  path: '/home',
  redirect: "/"
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
