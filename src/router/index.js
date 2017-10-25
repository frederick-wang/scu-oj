import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProblemList from '@/components/ProblemList'
import Problem from '@/components/Problem'
import Contest from '@/components/Contest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/problem_list',
      name: 'ProblemList',
      component: ProblemList
    },
    {
      path: '/problem/:id',
      name: 'Problem',
      component: Problem
    },
    {
      path: '/contest/:id',
      name: 'Contest',
      component: Contest
    },
    {
      path: '*',
      name: 'NotFound',
      component: Index
    }
  ]
})
