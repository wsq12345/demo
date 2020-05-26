import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import main from '@/page/main'
import userList from '@/page/userList'
import detail from '@/page/detail'
import edit from '@/page/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      redirect: '/userList',
      children:[
        {
          path: '/userList',
          name: userList,
          component: userList
        },
        {
          path: '/detail',
          name: detail,
          component: detail
        },
        {
          path: '/edit',
          name: edit,
          component: edit
        }
      ]
    },
  ]
})
