/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
// import { onNavigate } from '../main.js';

export const login = () => {
  const sectionLogin = document.createElement('section');
  sectionLogin.setAttribute('id', 'sectionLogin');
  sectionLogin.innerHTML = `
 <form id="formLogin" class="classForm">
 <h2>Ingresa</h2>
    <p>
   <label for="mail"> Email:</label>
   <input type = "email" id="mail" class='classInput'/><abbr title="required" aria-label="required">*</abbr> 
   </p>
    <p>
   <label for="password"> Contraseña: </label>
   <input type = "password" id="password" pattern=".{6,}" class='classInput'/><abbr title="required" aria-label="required">*</abbr>
   </p>
   <button type="submit" id= "btnLogin" >Regresar al Inicio</button>
   </form>
   `;
  // const btnLogin = document.getElementById('btnLogin');
  // btnLogin.addEventListener('click', () => onNavigate('/'));
  return sectionLogin;
};
