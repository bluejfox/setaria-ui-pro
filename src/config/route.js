import Main from '@/page/Main.vue';
import Login from '@/page/Login.vue';
import PageNotFound from '@/page/PageNotFound.vue';
import checkLoginStateGuard from '@/model/guard/checkLoginStateGuard';

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/page/dashboard/Dashboard');
const Analysis = () => import(/* webpackChunkName: "dashboard" */ '@/page/dashboard/Analysis');
const Workplace = () => import(/* webpackChunkName: "dashboard" */ '@/page/dashboard/Workplace');

const Form = () => import(/* webpackChunkName: "form" */ '@/page/form/Form');
const BasicForm = () => import(/* webpackChunkName: "form" */ '@/page/form/BasicForm');
const DynamicForm = () => import(/* webpackChunkName: "form" */ '@/page/form/DynamicForm');

const List = () => import(/* webpackChunkName: "list" */ '@/page/list/List');
const DynamicList = () => import(/* webpackChunkName: "list" */ '@/page/list/DynamicList');
const BasicList = () => import(/* webpackChunkName: "list" */ '@/page/list/basic-list/BasicList');

export default {
  middleware: ['auth', 'title'],
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: { auth: false },
      component: Login,
    },
    {
      path: '/',
      name: 'Main',
      meta: { title: '首页' },
      component: Main,
      beforeEnter: checkLoginStateGuard(true),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'fa-tachometer' },
          component: Dashboard,
          children: [
            {
              path: 'analysis',
              name: 'Analysis',
              meta: { title: '分析页' },
              component: Analysis,
            },
            {
              path: 'workplace',
              name: 'Workplace',
              meta: { title: '工作台' },
              component: Workplace,
            },
          ],
        },
        {
          path: 'list',
          name: 'List',
          meta: { title: '列表页', icon: 'fa-table', show: false },
          component: List,
          children: [
            {
              path: 'basic-list',
              name: 'BasicList',
              meta: { title: '标准列表' },
              component: BasicList,
            },
            {
              path: 'dynamic-list',
              name: 'DynamicList',
              meta: { title: '动态列表' },
              component: DynamicList,
            },
          ],
        },
        {
          path: 'form',
          name: 'Form',
          meta: { title: '表单页', icon: 'fa-pencil-square-o', show: false },
          component: Form,
          children: [
            {
              path: 'basic-form',
              name: 'BasicForm',
              meta: { title: '基础表单' },
              component: BasicForm,
            },
            {
              path: 'dynamic-form',
              name: 'DynamicForm',
              meta: { title: '动态表单' },
              component: DynamicForm,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
};