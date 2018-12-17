import VueRouter from 'vue-router';
import Home from './components/home/Home';
import About from './components/About';
// import Beers from './components/beers/Beers';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    // { path: '/beers', component: Beers },
    { path: '*', redirect: '/' }
  ]
});