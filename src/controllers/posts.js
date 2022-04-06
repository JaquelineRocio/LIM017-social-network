/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import {
  savePost, getPost, onGetPost, deletePost, getOnlyPost, updatePost,
} from '../config/configFirestore.js';

const postForm = document.getElementById('postForm');

const newPost = document.getElementById('newPost');
let editStatus = false;
let id = '';
window.addEventListener('DOMContentLoaded', async () => {
  onGetPost((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();
      html += `
      <div class="cardPost">
      <p class="textPost">${post.description}</p>
     
      <div class="btnsPost">
      <button class="btnDelete" data-id="${doc.id}">🗑</button>
      <button class="btnEdit" data-id="${doc.id}">🖉</button>
      </div>
      </div>`;
    });

    newPost.innerHTML = html;
    const btnDelete = newPost.querySelectorAll('.btnDelete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.id);
      });
    });

    const btnEdit = newPost.querySelectorAll('.btnEdit');
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', async ({ target: { dataset } }) => {
        const doc = await getOnlyPost(dataset.id);
        const post = doc.data();

        postForm.postDescription.value = post.description;
        editStatus = true;
        id = doc.id;
        postForm.btnPost.innerText = 'Guadar Cambios';
      });
    });
  });
});

// newPostsContainer.querySelectorAll('.btnCrud').forEach((btn) => btn.addEventListener('click', () => {
//   //newPostsContainer.querySelector('.btnsPost').classList.toggle('active');
//   console.log('funcionando');
// }));
console.log(postForm.querySelectorAll('.btnCrud'));
postForm.querySelectorAll('.btnCrud').forEach((btn) => btn.addEventListener('click', (e) => {
  // newPostsContainer.querySelector('.btnsPost').classList.toggle('active');
  console.log('funcionando', e);
}));

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = postForm.postDescription;
  if (!editStatus) {
    savePost(description.value);
  } else {
    updatePost(id, { description: description.value });
    editStatus = false;
    postForm.btnPost.innerText = 'Publicar';
  }
  postForm.reset();
});
