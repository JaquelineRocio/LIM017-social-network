/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
// import { onNavigate } from '../main.js';
import { signIn } from '../controllers/auth.js';

export const login = () => {
  const sectionLogin = document.createElement('section');
  sectionLogin.setAttribute('id', 'sectionLogin');
  sectionLogin.innerHTML = `
  <h2>Ingresa</h2>
    <p>
   <label for="mail"> Email:</label>
   <input type = "email" id="mail" class='classInput'/><abbr title="required" aria-label="required">*</abbr> 
   </p>
    <p>
   <label for="password"> Contraseña: </label>
   <input type = "password" id="password" pattern=".{6,}" class='classInput'/><abbr title="required" aria-label="required">*</abbr>
   </p>
   <button id= "btnLogin" >Ingresa</button>
  `;

  sectionLogin.querySelector('#btnLogin').addEventListener('click', () => {
    signIn(sectionLogin.querySelector('#mail').value, sectionLogin.querySelector('#password').value);
  });

  // const btnLogin = document.getElementById('btnLogin');
  // btnLogin.addEventListener('click', () => onNavigate('/'));
  return sectionLogin;
};
