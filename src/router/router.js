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
            path:'/side',
            
            component:Side,
          },
          {
            path:'',
            
            component: () => import(/* webpackChunkName: "about" */ '@/components/Child.vue')
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
    },
    {
      path: '/Font',
      name: 'Font',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/iViewBasic/Font.vue')
    },
    {
      path: '/Button',
      name: 'Button',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/iViewBasic/Button.vue')
    },
    {
      path: '/LanguageManage',
      name: 'LanguageManage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/PortalPages/LanguageManage.vue')

    }
  ]
})
