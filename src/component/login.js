// import { onNavigate } from '../main.js';

export const login = () => {
  const sectionHome = document.createElement('section');
  sectionHome.id = 'containerLogin';
  sectionHome.innerHTML = `
 <form id="formLogin">
 <fieldset>
    <legend>Login to your account</legend>
    <p>
   <label for="mail"> Email:</label>
   <input type = "email" id="mail" class='classInput'/><abbr title="required" aria-label="required">*</abbr> 
   </p>
    <p>
   <label for="password"> Password: </label>
   <input type = "password" id="password" pattern=".{6,}" class='classInput'/><abbr title="required" aria-label="required">*</abbr>
   </p>
   <button type="submit" id= "btnLogin" >LOGIN</button>
   </fieldset>
   </form>
   `;
  /* const btnLogin = document.getElementById('btnLogin');
  btnLogin.addEventListener('click', () => onNavigate('/')); */
  return sectionHome;
};
