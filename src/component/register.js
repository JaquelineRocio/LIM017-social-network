/* eslint-disable no-unused-vars */
import { createUser } from '../controllers/auth.js';

export const register = () => {
  const sectionRegister = document.createElement('section');
  sectionRegister.classList.add('sections');
  sectionRegister.innerHTML = `<section id="formRegister">
    <form>
    <h1>Registrate</h1>
    <p>
        <input id="firstName" placeholder ="Nombres" name="firstName" type="text" class='classInput'/>
    </p>
    <p>
        <input id="lastName" placeholder ="Apellidos" name="lastName" type="text" class='classInput'/>
    </p>
    <p>
        <input id="email" placeholder ="Email" name="lastName" type="text" class='classInput'/>
    </p>
    <p>
        <strong><abbr title="required">*</abbr></strong>
        <input type="tel" placeholder ="Número de Celular" id="phoneNumber" name="phoneNumber" class='classInput'>
    </p>
    <p>
        <strong><abbr title="required">*</abbr></strong>
        <em>el formato mm/aa</em>
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
    <abbr title="required" aria-label="required">*</abbr>
    <input type = "password" placeholder ="Contraseña" id="password" pattern=".{6,}" class='classInput'/>
    </p>
    <p>
    <abbr title="required" aria-label="required">*</abbr>
    <input type = "password" placeholder ="Contraseña" id="validatePassword" pattern=".{6,}" class='classInput'/>
    </p>
    <button type="button"  id="btnRegister" class ="button">Registrarse</button>
    </form>
    </section>`;

  sectionRegister.querySelector('#btnRegister').addEventListener('click', () => {
    createUser(sectionRegister.querySelector('#email').value, sectionRegister.querySelector('#password').value);
  });
  return sectionRegister;
};
