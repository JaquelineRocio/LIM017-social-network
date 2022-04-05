/* eslint-disable import/no-unresolved */
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();
export const savePost = (description) => {
  addDoc(collection(db, 'Posts'), { description });
};
export const getPost = () => getDocs(collection(db, 'Posts'));

export const onGetPost = (callback) => onSnapshot(collection(db, 'Posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'Posts', id));

export const getOnlyPost = (id) => getDoc(doc(db, 'Posts', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'Posts', id), newFields);
