import Vue from 'vue'
import Router from 'vue-router'

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: load('components/HelloWorld')
    },
    {
      path: '/Constituent',
      name: 'Constituent',
      component: load('components/Constituent')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: load('components/Dashboard')
    }
  ]
})
