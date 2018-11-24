import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Side from '@/components/Side.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  
      name: 'home',
      // redirect: '/side2',      
      component: Home,
      children: [
          {
            path:'',
            
            component:Side,
          },
          {
            path:'/side2',
            
            component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
          }
        ]
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/Color',
      name: 'Color',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/iViewBasic/Color.vue')
    }
  ]
})
