import VueRouter from 'vue-router';
import Home from './components/home/Home';
import About from './components/About';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '*', redirect: '/' }
  ]
});