/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import { savePost, getPost } from '../config/configFirestore.js';

const postForm = document.getElementById('postForm');
const newPostsContainer = document.getElementById('newPost');
window.addEventListener('DOMContentLoaded', async () => {
  const querySnapshot = await getPost();

  let html = '';

  querySnapshot.forEach((doc) => {
    const post = doc.data();
    html += `
    <div>
    <h3>${post.description}</h3>
    </div>`;
  });
  newPostsContainer.innerHTML = html;
});
postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const description = postForm.postDescription;
  savePost(description.value);
  postForm.reset();
});
