/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp, getAuth, onAuthStateChanged } from './firebase.js';

// import { getStorage } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-storage.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJ0SNX9QcbQmMfzWgfmQ7lhxUw9lFtLlM',
  authDomain: 'entrepatas-66ec5.firebaseapp.com',
  projectId: 'entrepatas-66ec5',
  storageBucket: 'entrepatas-66ec5.appspot.com',
  messagingSenderId: '605226519296',
  appId: '1:605226519296:web:2237cd24b99e76537ac1e5',
  measurementId: 'G-PL9WL9VHH6',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
// const storage = getStorage(firebaseApp);
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    document.querySelector('#dataGoogle').src = user.photoURL;
  }
});
