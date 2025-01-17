import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import JobView from '@/views/JobView.vue';
import JobAddView from '@/views/JobAddView.vue';
import EditJobView from '@/views/EditJobView.vue';
import NotFoundVIew from '@/views/NotFoundVIew.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },

    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView
    },

    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJobView
    },

    {
      path: '/jobs/add',
      name: 'add-job',
      component: JobAddView
    },

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundVIew
    }
  ]
})

export default router
