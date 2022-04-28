import { deleteDoc } from '../src/config/firebase.js';
import { deletePost } from '../src/config/configFirestore.js';
import { mainPage } from '../src/component/mainPage.js';

jest.mock('../src/config/firebase.js');

describe('mainPage', () => {
  it('', () => {
    expect(deletePost('id')).toEqual(deleteDoc());
  });
  it('Debería enviar un correo de verificacion', () => {
    expect(deleteDoc).toHaveBeenCalled();
    // eslint-disable-next-line quote-props
    expect(deleteDoc.mock.calls[0][0]).toEqual({ 'Posts': 'id' });
  });
});
describe('Main page', () => {
  it('Si el editStatus es false el text area deberia estar vacio', () => {
    const textarea = mainPage().querySelector('#postDescription');
    const editStatus = false;
    expect(textarea.value).toEqual('');
  });
});
