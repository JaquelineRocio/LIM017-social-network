/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { onNavigate } from '../main.js';

export const createUser = (email, password, wrongEmail, wrongPassword) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      onNavigate('/mainPage');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/email-already-in-use':
          wrongEmail.innerText = 'Este correo ya esta registrado, intente de nuevo.';
          break;
        case 'auth/internal-error':
          wrongPassword.innerText = 'La contraseña es obligatoria';
          break;
        default:
          wrongPassword.innerText = errorCode;
      }
     
    });
};

export const signIn = (email, password, wrongEmail, wrongPassword) => {
  const auth2 = getAuth();
  let result;
  signInWithEmailAndPassword(auth2, email, password)
    .then((userCredential) => {
    // Signed in
      const user2 = userCredential.user;
      onNavigate('/mainPage');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/user-not-found':
          wrongEmail.innerText = 'No existe usuario registrado con ese correo';
          break;
        case 'auth/wrong-password':
          wrongPassword.innerText = 'La contraseña no es válida, intente de nuevo.';
          break;
        case 'auth/email-already-exists':
          wrongEmail.innerText = 'Este correo ya esta registrado, intente de nuevo.';
          break;
        default:
          wrongPassword.innerText = errorCode;
      }
    });
  return result;
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      onNavigate('/mainPage');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};

export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
    // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

    // ...
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
    });
};
