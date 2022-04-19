/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import { createUser } from '../controllers/auth.js';
import { onNavigate } from '../main.js';
import { saveUsersData } from '../config/configFirestore.js';
import { errorRegister } from '../lib/errorHandler.js';

export const register = () => {
  const sectionRegister = document.createElement('section');
  sectionRegister.classList.add('sectionsForms');
  sectionRegister.innerHTML = `<div id="blur"></div><section id="formRegister">
    <form id="registerForm">
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
    <div class="inputPass">
    <input type = "password" id="password" pattern=".{6,}" class='classInput' placeholder ="Contraseña"/><i id="iconEye" class="fa-solid fa-eye-slash"></i>
    </div>

    <div class="inputPass">
    <input type = "password" placeholder ="Confirmar Contraseña" id="validatePassword" pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$" class='classInput'/><i id="iconEye2" class="fa-solid fa-eye-slash"></i>
    </div>
    <p id="wrongPassword"  class="error"></p>
    
    <button id="btnRegister" class ="button">Registrarse</button>
    <button type="button" id="btnRedirectsLogin" class="redirect">Si ya tienes cuenta, Ingresa aquí</button>
    </form>
    </section>`;
  sectionRegister.querySelector('#iconEye').addEventListener('click', () => {
    const password = sectionRegister.querySelector('#password');
    const iconEye = sectionRegister.querySelector('#iconEye');
    if (password.type === 'password') {
      password.type = 'text';
      iconEye.classList.remove('fa-eye-slash');
      iconEye.classList.add('fa-eye');
    } else {
      password.type = 'password';
      iconEye.classList.add('fa-eye-slash');
      iconEye.classList.remove('fa-eye');
    }
  });
  sectionRegister.querySelector('#iconEye2').addEventListener('click', () => {
    const validatePassword = sectionRegister.querySelector('#validatePassword');
    const iconEye2 = sectionRegister.querySelector('#iconEye2');
    if (validatePassword.type === 'password') {
      validatePassword.type = 'text';
      iconEye2.classList.remove('fa-eye-slash');
      iconEye2.classList.add('fa-eye');
    } else {
      validatePassword.type = 'password';
      iconEye2.classList.add('fa-eye-slash');
      iconEye2.classList.remove('fa-eye');
    }
  });
  sectionRegister.querySelector('#btnRegister').addEventListener('click', () => {
    const email = sectionRegister.querySelector('#email').value;
    const password = sectionRegister.querySelector('#password').value;
    const wrongEmail = sectionRegister.querySelector('#wrongEmail');
    const wrongPassword = sectionRegister.querySelector('#wrongPassword');
    const passwordVerified = sectionRegister.querySelector('#validatePassword').value;
    console.log('email', email);
    if (password === passwordVerified) {
      createUser(email, password, wrongEmail, wrongPassword)
        .then((errorCode) => {
          if (errorCode.emailVerified === false) {
            wrongPassword.innerText = 'Verifica tu correo';
            wrongPassword.style.color = 'blue';
            setTimeout(() => {
              onNavigate('/login');
            }, 3000);
          } else {
            wrongPassword.innerText = errorRegister(errorCode);
          }
        });
    } else {
      wrongPassword.innerText = 'Las contraseñas no coinciden';
    }
  });

  const registerForm = sectionRegister.querySelector('#registerForm');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = sectionRegister.querySelector('#firstName').value;
    const lastName = sectionRegister.querySelector('#lastName').value;
    const email = sectionRegister.querySelector('#email').value;
    const phoneNumber = sectionRegister.querySelector('#phoneNumber').value;
    const birthday = sectionRegister.querySelector('#birthday').value;

    saveUsersData(firstName, lastName, email, birthday);
  });
  registerForm.querySelector('#btnRedirectsLogin').addEventListener('click', () => onNavigate('/login'));
  return sectionRegister;
};
