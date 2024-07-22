import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/',redirect: '/tabs/tab1'},
  { path: '/todo',component:() => import('../views/pages/Todo.vue')},
  { path: '/add',component:() => import('../views/pages/add.vue')},
  {
    path: '/tabs/', component: TabsPage,
    children: [
      { path: '', redirect: '/tabs/tab1'},
      { path: 'tab1',component: () => import('@/views/Tab1Page.vue') },
      { path: 'tab2',component: () => import('@/views/Tab2Page.vue') },
      { path: 'tab3', component: () => import('@/views/Tab3Page.vue') }
    ]
  },
  { path: '/vue/state',component:() => import('../views/vue-basic-feature/state.vue')},
  { path: '/vue/if',component:() => import('../views/vue-basic-feature/if.vue')},
  { path: '/vue/event',component:() => import('../views/vue-basic-feature/event.vue')},
  { path: '/vue/iterator',component:() => import('../views/vue-basic-feature/iterator.vue')},
  { path: '/vue/model',component:() => import('../views/vue-basic-feature/model.vue')},
  { path: '/vue/lifecycle',component:() => import('../views/vue-basic-feature/lifecycle.vue')},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
