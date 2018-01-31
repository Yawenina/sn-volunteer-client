import VueRouter from 'vue-router'
import App from './components/App.vue'
import Orgs from './components/Orgs.vue'
import AddOrg from './components/AddOrg.vue'

const routes = [
  {
    path: '/',
    name: '首页',
    component: App
  },
  {
    path: '/orgs',
    name: '组织管理',
    component: Orgs
  },
  {
    path: '/orgs/add',
    name: '添加组织',
    component: AddOrg
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
