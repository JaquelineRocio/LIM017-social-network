/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider,
  sendEmailVerification, onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { onNavigate } from '../main.js';

const stateUser = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    const emailVerified = user.emailVerified;
    const uid = user.uid;
    if (emailVerified) {
      onNavigate('/mainPage');
    } else {
      alert('verifica tu correo');
    }
  });
};

export const createUser = (email, password, wrongEmail, wrongPassword) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sendEmailVerification(auth.currentUser);
      alert('Por favor revise su correo para confirmar');
      onNavigate('/login');
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
};
export const signIn = (email, password, wrongEmail) => {
  const auth2 = getAuth();
  let result;
  signInWithEmailAndPassword(auth2, email, password)
    .then((userCredential) => {
      const user2 = userCredential.user;
      stateUser();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/user-not-found':
          wrongEmail.innerText = 'No existe usuario registrado con ese correo';
          break;
        case 'auth/wrong-password':
          wrongEmail.innerText = 'La contraseña no es válida, intente de nuevo.';
          break;
        case 'auth/internal-error':
          wrongEmail.innerText = 'Digite correctamente su contraseña';
          break;
        case 'auth/invalid-email':
          wrongEmail.innerText = 'Digite correctamente su correo y contraseña';
          break;
        case 'auth/email-already-exists':
          wrongEmail.innerText = 'Este correo ya esta registrado, intente de nuevo.';
          break;
        default:
          wrongEmail.innerText = errorCode;
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
      const user = result.user;
      onNavigate('/mainPage');
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
};
