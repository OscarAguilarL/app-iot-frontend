import { createRouter, createWebHistory } from 'vue-router';
import ControllerVue from '../components/Controller.vue';
import HomeVue from '../components/Home.vue';
import HistoryVue from '../components/History.vue';

// const routes = [{ path: '/', component: ControllerVue }];

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeVue },
    { path: '/controller', component: ControllerVue },
    { path: '/historico', component: HistoryVue },
  ],
});
