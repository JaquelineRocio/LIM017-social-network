/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable indent */

import {onNavigate} from '../main.js'

export const Home = () => {
    const sectionHome = document.createElement('section');
    const btnRegister = document.createElement('button');
    const btnLogin = document.createElement('button');

    btnRegister.textContent = 'Registrate';
    btnRegister.addEventListener('click', () => onNavigate('/register'));
    btnLogin.textContent = 'Iniciar Sesión';
    btnLogin.addEventListener('click', () => onNavigate('/login'));

    sectionHome.appendChild(btnRegister);
    sectionHome.appendChild(btnLogin);
    return sectionHome;
};