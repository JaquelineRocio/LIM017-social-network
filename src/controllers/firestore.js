/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import {
  savePost, getPost, onGetPost, deletePost, getOnlyPost, updatePost,
} from '../config/configFirestore.js';

const postForm = document.getElementById('postForm');
const newPostsContainer = document.getElementById('newPost');
let editStatus = false;
let id = '';
window.addEventListener('DOMContentLoaded', async () => {
  onGetPost((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();
      html += `
      <div class="cardPost">
      <h3>${post.description}</h3>
      <button class="btnCrud">፧</button>
      <div class="btnsPost">
      <button class="btnDelete" data-id="${doc.id}">🗑</button>
      <button class="btnEdit" data-id="${doc.id}">🖉</button>
      </div>
      </div>`;
    });

    newPostsContainer.innerHTML = html;
    const btnDelete = newPostsContainer.querySelectorAll('.btnDelete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.id);
      });
    });

    const btnEdit = newPostsContainer.querySelectorAll('.btnEdit');
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

// postForm.querySelector('.btnCrud').addEventListener('click', () => {
//   postForm.querySelector('.btnsPost').classList.toggle('active');
// });

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
