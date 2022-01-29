import Home from '../pages/Home'
import Edit from '../pages/Edit'
import Preview from '../pages/Preview'
import Login from '../pages/Login'
import Todo from '../pages/Todo'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    auth: true,
    exact: true //是否为严格模式
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    auth: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/edit/:id',//后面是传递的参数id
    name: 'edit',
    auth: true,
    component: Edit
  },
  {
    path: '/preview/:id',
    name: 'preview',
    auth: true,
    component: Preview
  }
]

export default routes;
