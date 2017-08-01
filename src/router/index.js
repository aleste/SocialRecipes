import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '@/components/Recipes/Recipes'
import CreateRecipe from '@/components/Recipes/CreateRecipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Recipes
    },
    {
      path: '/new',
      name: 'create',
      component: CreateRecipe
    }
  ]
})
