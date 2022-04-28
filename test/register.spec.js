import { register } from '../src/component/register.js';
//import { createUser } from '../../src/controllers/auth.js';

jest.mock('../src/config/firebase.js');
// jest.mock('../../src/controllers/auth.js');
// jest.mock('../../src/config/configFirestore.js');
describe('register', () => {
  it('Si las contraseñas no coinciden nos manda un mensaje de error', () => {
    const signUp = register();
    const password = signUp.querySelector('#password');
    const validatePassword = signUp.querySelector('#validatePassword');
    password.value = '123456';
    validatePassword.value = '1234';
    const btnRegister = signUp.querySelector('#btnRegister');
    btnRegister.dispatchEvent(new Event('click'));
    const wrongPassword = signUp.querySelector('#wrongPassword');

    expect(wrongPassword.innerText).toBe('Las contraseñas no coinciden');
  });
});
// describe('create user', () => {
//   it('', () => {
//     const email = 'usuario@gmail.com';
//     const password = '123456';

//     expect(createUser(email, password)).toBe('Las contraseñas no coinciden');
//   });
// });
