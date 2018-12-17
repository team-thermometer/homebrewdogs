import VueRouter from 'vue-router';
import Home from './components/home/Home';
// import Beers from './components/beers/Beers';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    // { path: '/beers', component: Beers },
    { path: '*', redirect: '/' }
  ]
});