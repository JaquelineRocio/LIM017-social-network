/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

export const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('invalido');
    });
};

export const signIn = (email, password) => {
  const auth2 = getAuth();
  let result;
  signInWithEmailAndPassword(auth2, email, password)
    .then((userCredential) => {
    // Signed in
      const user2 = userCredential.user;
      result = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      result = false;
    });
  return result;
};

export const SignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return true;
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      return false;
      // ...
      console.log(errorCode, errorMessage, email, credential);
    });
};
