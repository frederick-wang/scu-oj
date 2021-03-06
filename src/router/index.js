import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProblemList from '@/components/ProblemList'
import ContestList from '@/components/ContestList'
import Problem from '@/components/Problem'
import Contest from '@/components/Contest'
import Discuss from '@/components/Discuss'
import Solution from '@/components/Solution'
import Record from '@/components/Record'

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
      path: '/contest_list',
      name: 'ContestList',
      component: ContestList
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
      path: '/discuss/:id',
      name: 'Discuss',
      component: Discuss
    },
    {
      path: '/solution/:id',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/record/:id',
      name: 'Record',
      component: Record
    },
    {
      path: '*',
      name: 'NotFound',
      component: Index
    }
  ]
})
