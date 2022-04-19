/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import './configFirebase.js';
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc, query, orderBy,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();
// Guarda los posts
export const savePost = (description, likes) => {
  addDoc(collection(db, 'Posts'), { description, likes: 0, date: new Date(Date.now()) });
};
// Obtiene los posts
export const getPost = () => getDocs((collection(db, 'Posts')));
// muestra los posts sin que se recargue la pagina
export const onGetPost = (callback) => onSnapshot(query(collection(db, 'Posts'), orderBy('date', 'desc')), callback);
// elimina los posts
export const deletePost = (id) => deleteDoc(doc(db, 'Posts', id));
// llama a un solo post
export const getOnlyPost = (id) => getDoc(doc(db, 'Posts', id));
// actualiza un post
export const updatePost = (id, newFields) => updateDoc(doc(db, 'Posts', id), newFields);

// registra los datos del usuario
export const saveUsersData = (firstName, lastName, email, birthday) => {
  addDoc(collection(db, 'Users'), {
    firstName, lastName, email, birthday,
  });
};
export const postRef = (users, user, posts, post) => doc(db, users, user, posts, post);
