/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc, query, orderBy, collectionGroup,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider,
  sendEmailVerification, onAuthStateChanged, signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

export { initializeApp };
export {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc, query, orderBy, collectionGroup,
};

export {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider,
  sendEmailVerification, onAuthStateChanged, signOut,
};
