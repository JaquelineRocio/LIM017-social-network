/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
// import { onNavigate } from '../main.js';

export const login = () => {
  const sectionHome = document.createElement('section');
  sectionHome.id = 'containerLogin';
  sectionHome.innerHTML = `
 <form id="formLogin" class="classForm">
 <fieldset>
    <legend>Ingresa a tu cuenta</legend>
    <p>
   <label for="mail"> Email:</label>
   <input type = "email" id="mail" class='classInput'/><abbr title="required" aria-label="required">*</abbr> 
   </p>
    <p>
   <label for="password"> Contraseña: </label>
   <input type = "password" id="password" pattern=".{6,}" class='classInput'/><abbr title="required" aria-label="required">*</abbr>
   </p>
   <button type="submit" id= "btnLogin" >Regresar al Inicio</button>
   </fieldset>
   </form>
   `;
  // const btnLogin = document.getElementById('btnLogin');
  // btnLogin.addEventListener('click', () => onNavigate('/'));
  return sectionHome;
};
