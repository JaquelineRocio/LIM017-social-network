/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
import { onNavigate } from '../main.js';
import { signIn, signInWithGoogle, signInWithFacebook } from '../controllers/auth.js';
// import { mainPage } from './mainPage.js';

export const login = () => {
  const sectionLogin = document.createElement('section');
  sectionLogin.setAttribute('id', 'sectionLogin');
  sectionLogin.innerHTML = `<section id="formLogin">
  
  <h1>Ingresa</h1>
    <p>
   <input type = "email" id="mail" class='classInput' placeholder ="Email"/><abbr title="required" aria-label="required">*</abbr>
   <p id="wrongEmail"></p>
   </p>
    <p>
   <input type = "password" id="password" pattern=".{6,}" class='classInput' placeholder ="Contraseña"/><abbr title="required" aria-label="required">*</abbr>
   <p id="wrongPassword"></p>
   </p>
   <button id="btnLogin" class ="button">Ingresa</button>
   <button type="button" id="signInGoogle" class ="buttonFirebase">Continua con Google</button>
   <button type="button" id="signInFacebook" class ="buttonFirebase">Continua con Facebook</button>
   </section>
  `;

  sectionLogin.querySelector('#btnLogin').addEventListener('click', () => {
    const email = sectionLogin.querySelector('#mail').value;
    const password = sectionLogin.querySelector('#password').value;
    const wrongEmail = sectionLogin.querySelector('#wrongEmail');
    const wrongPassword = sectionLogin.querySelector('#wrongPassword');
    signIn(email, password, wrongEmail, wrongPassword);
  });
  sectionLogin.querySelector('#signInGoogle').addEventListener('click', () => signInWithGoogle());
  sectionLogin.querySelector('#signInFacebook').addEventListener('click', () => signInWithFacebook());
  // const btnLogin = document.getElementById('btnLogin');
  // btnLogin.addEventListener('click', () => onNavigate('/'));
  return sectionLogin;
};
