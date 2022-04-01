/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable indent */

import {onNavigate} from '../main.js'

export const Home = () => {
    const sectionHome = document.createElement('section');
    sectionHome.innerHTML = `<div id="intro" class="intro">
    <h1 id="h1Intro">Entre Patas</h1>
    <p class="pIntro">Es una red social centrada en el bienestar de tu mascota,
      en ella podrás conocer nuevos amigos peludos,  postear recomendaciones,
      avisos para encontrarlo, sí está extraviado, oportunidades para adoptar
      e incluso denuncias de maltratos. </p>
    <p class="pIntro"><b>Registrate, es fácil y gratis</b></p>
  </div>`
    const btnRegister = document.createElement('button');
    const btnLogin = document.createElement('button');
    btnRegister.textContent = 'Registrate';
    btnRegister.addEventListener('click', () => {
        onNavigate('/register');
    });
    btnRegister.classList.add("btnHome");
    btnLogin.textContent = 'Inicia Sesión';
    btnLogin.addEventListener('click', () => {
        onNavigate('/login');
    });
    btnLogin.classList.add("btnHome");

    sectionHome.appendChild(btnRegister);
    sectionHome.appendChild(btnLogin);
    sectionHome.classList.add("sectionHome");
    return sectionHome;
};