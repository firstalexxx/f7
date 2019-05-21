import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/not-found.f7.html';
import PanelLeftPage from '../pages/panel-left.f7.html';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
