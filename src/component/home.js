/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable indent */

import {onNavigate} from '../main.js'

export const Home = () => {
    const sectionHome = document.createElement('section');
    sectionHome.classList.add("sectionHome");
    const btnRegister = document.createElement('button');
    const btnLogin = document.createElement('button');

    btnRegister.textContent = 'Registrate';
    btnRegister.addEventListener('click', () => onNavigate('/register'));
    btnRegister.classList.add("btns");
    btnLogin.textContent = 'Inicia Sesión';
    btnLogin.addEventListener('click', () => onNavigate('/login'));
    btnLogin.classList.add("btns");

    sectionHome.appendChild(btnRegister);
    sectionHome.appendChild(btnLogin);
    return sectionHome;
};