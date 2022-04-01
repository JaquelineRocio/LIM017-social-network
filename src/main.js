/* eslint-disable import/no-cycle */
/* eslint-disable space-before-blocks */
/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction(); */
import { Home } from './component/home.js';
import { login } from './component/login.js';
import { register } from './component/register.js';
import { mainPage } from './component/mainPage.js';

const divRoot = document.getElementById('root');
const routes = {
  '/': Home,
  '/login': login,
  '/register': register,
  '/mainPage': mainPage,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (divRoot.firstChild){
    divRoot.removeChild(divRoot.firstChild);
  };

  divRoot.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (divRoot.firstChild){
    divRoot.removeChild(divRoot.firstChild);
  }
  divRoot.appendChild(routes[window.location.pathname]());
};
divRoot.appendChild(component());
const btnMenu = document.querySelector('#btnMenuContainer');
const asideMain = document.querySelector('#asideMain');
btnMenu.addEventListener('click', () => {
  asideMain.classList.toggle('active');
});
