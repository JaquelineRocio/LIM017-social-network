/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider,
  sendEmailVerification, onAuthStateChanged, signOut,
} from '../config/firebase.js';
import { onNavigate } from '../main.js';
import '../component/login.js';

export const exit = () => {
  const auth = getAuth();
  return signOut(auth);
};

export const createUser = (email, password, wrongEmail, wrongPassword) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sendEmailVerification(auth.currentUser);
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
};
export const userState = () => {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.email;
      return uid;
      // ...
    }
    // User is signed out
    // ...
    return 'user is signed out';
  });
};

export const signIn = (email, password, wrongEmail) => {
  const auth2 = getAuth();
  signInWithEmailAndPassword(auth2, email, password)
    .then((userCredential) => {
      const user2 = userCredential.user;
      onAuthStateChanged(auth2, (user) => {
        const emailVerified = user.emailVerified;
        const uid = user.uid;
        if (emailVerified) {
          onNavigate('/mainPage');
        } else {
          wrongEmail.innerText = 'Verifique su email';
        }
      });
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
};
export const dataUserGoogle = () => {
  const auth = getAuth();
  const user1 = auth.currentUser;
  if (user1 !== null) {
    user1.providerData.forEach((profile) => {
    });
  } return user1;
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
      return user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
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
