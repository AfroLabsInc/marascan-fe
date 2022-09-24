import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'donor/get-started',
        component: () => import('pages/DonorRegistration.vue'),
      },
      {
        path: 'donor/create-account/:donorType',
        name: 'create-account',
        component: () => import('pages/CreateAccount.vue'),
      },
      {
        path: 'donor/complete-profile',
        name: 'complete-profile',
        component: () => import('src/pages/DonorCreateProfile.vue'),
      },
      {
        path: 'donor/submit-kyc/',
        name: 'submit-kyc',
        component: () => import('src/pages/DonorKYC.vue'),
      },
      {
        path: 'donor/login',
        component: () => import('src/pages/LoginPage.vue'),
      },

      // dashboard routes
      {
        path: 'donor/dashboard',
        component: () => import('layouts/AdminLayout.vue'),
        name: 'dashboard-donor',
        children: [
          {
            path: '',
            name: 'dashboard-donor-home',
            component: () => import('pages/Admin/IndexPage.vue'),
          },
          {
            path: '/proflie',
            name: 'dashboard-donor-proflie',
            component: () => import('pages/Admin/ProfilePage.vue'),
          },
          {
            path: '/edit-profile',
            name: 'proflie-edit',
            component: () => import('pages/Admin/ProfileEditPage.vue'),
          },
          {
            path: '/marascan',
            name: 'marascan',
            component: () => import('pages/Admin/MarascanPage.vue'),
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
