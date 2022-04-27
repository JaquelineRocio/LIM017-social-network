import { register } from '../../src/component/register.js';

jest.mock('../../src/config/firebase.js');
// jest.mock('../../src/controllers/auth.js');
// jest.mock('../../src/config/configFirestore.js');
describe('register', () => {
  it('', () => {
    const signUp = register();
    const password = signUp.querySelector('#password');
    const validatePassword = signUp.querySelector('#validatePassword');
    password.value = '123456';
    validatePassword.value = '1234';
    console.log(password);
  });
});
