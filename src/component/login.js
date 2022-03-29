/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
import { onNavigate } from '../main.js';
import { signIn, SignInWithGoogle } from '../controllers/auth.js';
import { mainPage } from './mainPage.js';

export const login = () => {
  const sectionLogin = document.createElement('section');
  sectionLogin.setAttribute('id', 'sectionLogin');
  sectionLogin.innerHTML = `<section id="formLogin">
  
  <h1>Ingresa</h1>
    <p>
   <input type = "email" id="mail" class='classInput' placeholder ="Email"/><abbr title="required" aria-label="required">*</abbr> 
   </p>
    <p>
   <input type = "password" id="password" pattern=".{6,}" class='classInput' placeholder ="Contraseña"/><abbr title="required" aria-label="required">*</abbr>
   </p>
   <button id="btnLogin" class ="button">Ingresa</button>
   <button type="button" id="signInGoogle" class ="buttonFirebase">Continua con Google</button>
  
   </section>
  `;

  sectionLogin.querySelector('#btnLogin').addEventListener('click', () => {

  
  });
  sectionLogin.querySelector('#signInGoogle').addEventListener('click', () => SignInWithGoogle());
  // const btnLogin = document.getElementById('btnLogin');
  // btnLogin.addEventListener('click', () => onNavigate('/'));
  return sectionLogin;
};
