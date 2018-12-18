import VueRouter from 'vue-router';
import Home from './components/home/Home';
import About from './components/About';
import Beers from './components/beers/Beers';
import BeerDetail from './components/beers/BeerDetail';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/beers', component: Beers },
    { path: '/beers/:id', component: BeerDetail },
    { path: '*', redirect: '/' }
  ]
});