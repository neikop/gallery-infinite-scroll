import Gallery from 'views/Galerry';
import Notification from 'views/Notification';
import Setting from 'views/Setting';

const privateRoute = {
  Home: {
    name: 'Home',
    path: '/home',
    component: Gallery,
    icon: 'block layout',
  },
  Notification: {
    name: 'Notifications',
    path: '/notifications',
    component: Notification,
    icon: 'alarm',
  },
  Setting: {
    name: 'Settings',
    path: '/settings',
    component: Setting,
    icon: 'setting',
  },
};

export default privateRoute;
