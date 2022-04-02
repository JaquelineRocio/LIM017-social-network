/* eslint-disable import/no-unresolved */
import {
  getFirestore, collection, addDoc, getDocs,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();
export const savePost = (description) => {
  addDoc(collection(db, 'Posts'), { description });
};
export const getPost = () => getDocs(collection(db, 'Posts'));
