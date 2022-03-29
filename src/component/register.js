/* eslint-disable no-unused-vars */
import { createUser } from '../controllers/auth.js';

export const register = () => {
  const sectionRegister = document.createElement('section');
  sectionRegister.classList.add('sectionsForms');
  sectionRegister.innerHTML = `<div id="blur"></div><section id="formRegister">
    <form>
    <h1 id="titleRegister">Registrate</h1>
    <p>
        <input id="firstName" placeholder ="Nombres" name="firstName" type="text" class='classInput'/>
    </p>
    <p>
        <input id="lastName" placeholder ="Apellidos" name="lastName" type="text" class='classInput'/>
    </p>
    <p>
        <input id="email" placeholder ="Email" name="email" type="text" class='classInput'/>
        <p id="wrongEmail"  class="error"></p>
    </p>
    <p>
       
        <input type="tel" placeholder ="Número de Celular" id="phoneNumber" name="phoneNumber" class='classInput'>
    </p>
    <p>
       
       
        <input type="date" placeholder ="Fecha de nacimiento" id="birthday" name="expiration" class='classInput'>
    </p>
    <p>
      <select id="gender" name="usercard" class='classInput'>
        <option value="empty" disabled selected>Género</option>
        <option value="female">Femenino</option>
        <option value="male">Masculino</option>
        <option value="other">Otro</option>
      </select>
    </p>
    <p>
   
    <input type = "password" placeholder ="Contraseña" id="password" pattern=".{6,}" class='classInput'/>
    </p>
    <p>
   
    <input type = "password" placeholder ="Contraseña" id="validatePassword" pattern=".{6,}" class='classInput'/>
    </p>
    <p id="wrongPassword"  class="error"></p>
    <button type="button"  id="btnRegister" class ="button">Registrarse</button>
     
    </form>
    
    </section>`;

  sectionRegister.querySelector('#btnRegister').addEventListener('click', () => {
    const email = sectionRegister.querySelector('#email').value;
    const password = sectionRegister.querySelector('#password').value;
    const wrongEmail = sectionRegister.querySelector('#wrongEmail');
    const wrongPassword = sectionRegister.querySelector('#wrongPassword');
    createUser(email, password, wrongEmail, wrongPassword);
  });
  return sectionRegister;
};
