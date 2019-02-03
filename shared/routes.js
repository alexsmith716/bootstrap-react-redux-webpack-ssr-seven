
import { App, Home, NotFound } from '../client/containers';

import About from '../client/containers/About/Loadable';
import AboutOne from '../client/containers/AboutOne/Loadable';
import AboutTwo from '../client/containers/AboutTwo/Loadable';
import AboutThree from '../client/containers/AboutThree/Loadable';
import AboutFour from '../client/containers/AboutFour/Loadable';
import StickyFooter from '../client/containers/StickyFooter/Loadable';
import BoardGames from '../client/containers/games/BoardGames/Loadable';
import Login from '../client/containers/Login/Loadable';
import Register from '../client/containers/Register/Loadable';

const routes = [{
  component: App,
  routes: [
    { path: '/', exact: true, component: Home },
    { path: '/about', component: About },
    { path: '/aboutone', component: AboutOne },
    { path: '/abouttwo', component: AboutTwo },
    { path: '/aboutthree', component: AboutThree },
    { path: '/aboutfour', component: AboutFour },
    { path: '/stickyfooter', component: StickyFooter },
    { path: '/boardgames', component: BoardGames },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { component: NotFound }
  ]
}];

export default routes;
