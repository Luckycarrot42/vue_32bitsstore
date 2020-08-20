import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const Search = () => import('./components/Search')
const Sales = () => import('./components/Sales')
const Total = () => import('./components/Total')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Inicio
        },
        {
          path: '/search',
          name: 'Search',
          component: Search
        },
        {
          path: '/sales',
          name: 'Sales',
          component: Sales
        },
        {
          path: '/total',
          name: 'Total',
          component: Total
        },  
        
    ]
})