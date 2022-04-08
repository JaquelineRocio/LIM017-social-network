/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import {
  savePost, getPost, onGetPost, deletePost, getOnlyPost, updatePost,
} from '../config/configFirestore.js';

const postForm = document.getElementById('postForm');
const modalContainer = document.getElementById('modalContainer');
const newPost = document.getElementById('newPost');
let editStatus = false;
let id = '';
window.addEventListener('DOMContentLoaded', async () => {
  onGetPost((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();
      console.log(typeof (post));
      if (post.description !== '') {
        html += `
        <div class="cardPost">
        <p class="textPost">${post.description}</p>
        <button class="btnCrud" data-id="${doc.id}">🗑</button>
        <div class="btnsPost">
        <button class="btnDelete" data-id="${doc.id}">🗑</button>
        <button class="btnEdit" data-id="${doc.id}">🖉</button>
        </div>
        </div>`;
      }
    });

    newPost.innerHTML = html;
    const btnDelete = newPost.querySelectorAll('.btnDelete');
    console.log(btnDelete);
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        console.log('ksksks');
        const modalDelete = document.createElement('div');
        modalContainer.classList.add('zIndex');
        modalDelete.setAttribute('class', 'modalDelete');
        const questionDelete = document.createElement('p');
        questionDelete.setAttribute('class', 'questionDelete');
        questionDelete.innerText = '¿Está seguro que desea eliminar esta publicación?';
        const btnAccept = document.createElement('button');
        btnAccept.setAttribute('class', 'btnAccept');
        btnAccept.innerText = 'Sí, estoy segura';
        const btnCancel = document.createElement('button');
        btnCancel.setAttribute('class', 'btnCancel');
        btnCancel.innerText = 'Cancelar';
        modalDelete.appendChild(questionDelete);
        modalDelete.appendChild(btnAccept);
        modalDelete.appendChild(btnCancel);
        modalContainer.appendChild(modalDelete);

        btnAccept.addEventListener('click', () => {
          deletePost(dataset.id);
          modalDelete.style.display = 'none';
          modalContainer.classList.remove('zIndex');
        });
        btnCancel.addEventListener('click', () => {
          modalDelete.style.display = 'none';
          modalContainer.classList.remove('zIndex');
        });

        // window.onclick = function (event) {
        //   if (event.target === modalDelete) {
        //     modalDelete.style.display = 'none';
        //   }
        // };
      });
      // document.querySelector('#shadowContainer').addEventListener('click', () => {
      //   postForm.querySelector('.modalDelete').style.display = 'none';
      //   shadowContainer.style.display = 'block';
      //   console.log('jsjsjsj');
      // });
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
// const btnDelete = newPostsContainer.querySelectorAll('.btnDelete');
//     btnDelete.forEach((btn) => {
//       btn.addEventListener('click', ({ target: { dataset } }) => {
//         deletePost(dataset.id);
//       });
//     });
// console.log(postForm.querySelectorAll('.btnCrud'));
// postForm.querySelectorAll('.btnCrud').forEach((btn) => btn.addEventListener('click', (e) => {
//   // newPostsContainer.querySelector('.btnsPost').classList.toggle('active');
//   console.log('funcionando', e);
// }));
console.log(postForm.querySelectorAll('.btnCrud'));
postForm.querySelectorAll('.btnCrud').forEach((btn) => btn.addEventListener('click', (e) => {
// newPostsContainer.querySelector('.btnsPost').classList.toggle('active');
  console.log('funcionando', e);
}));
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

postForm.querySelectorAll('.btnCrud').forEach((btn) => btn.addEventListener('click', () => {
  postForm.querySelectorAll('.btnsPost').forEach((boton) => boton.classList.toggle('active'));
  console.log('hola');
}));
