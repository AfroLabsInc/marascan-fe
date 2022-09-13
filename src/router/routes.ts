import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'donor/create-account/:donorType',
        name: 'create-account',
        component: () => import('pages/CreateAccount.vue'),
      },
      {
        path: 'donor/login',
        component: () => import('src/pages/LogIn.vue'),
      },
      {
        path: 'donor/dashboard',
        component: () => import('src/pages/Dashboard/DashboardLayout.vue'),
        name: 'dashboard-donor',
        children: [
          {
            path: '',
            name: 'dashboard-donor-home',
            component: () => import('src/pages/Dashboard/Home.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
