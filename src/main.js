/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction(); */
import { Home } from './component/home.js';
import { login } from './component/login.js';
import { register } from './component/register.js';

const divRoot = document.getElementById('root');
const routes = {
  '/': Home,
  '/login': login,
  '/register': register,
};
const component = routes[window.location.pathname];

divRoot.appendChild(component());
