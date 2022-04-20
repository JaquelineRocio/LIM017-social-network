/* eslint-disable import/no-cycle */
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { onNavigate } from '../main.js';
import { exit, dataUserGoogle, userState } from '../controllers/auth.js';
import {
  savePost, updatePost, onGetPost, deletePost, getOnlyPost,
} from '../config/configFirestore.js';

// import { showPosts } from '../controllers/posts.js';

export const mainPage = () => {
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('mainPage');
  mainContainer.innerHTML = `<header id="headerMain">
    <img id="logoMain" src="img/LogoRemasterizado.png">
    <input type="text" id="inputSearch" placeholder="Buscar ..."/>
    <div id="userName"></div>
    <img id="dataGoogle"> 
    <button id="btnSignOut"><i class="fa-solid fa-right-from-bracket"></i>Cerrar Sesión</button>
    <button id="btnMenuContainer"> <i class="fa-solid fa-bars"></i> </button> 
   </header>
   
   <aside id="asideMain">
    <ul id="ulGroup">
      <li class="liGroup">Perfil</li>
      <li class="liGroup">Adopciones</li>
      <li class="liGroup">Consejos</li>
      <li class="liGroup">Mascotas perdidas</li>
      <li class="liGroup">Acerca de nosotros</li>
    </ul>
   </aside>
   
   <section id="postSection">
  
    <form id="postForm">
    <div id="modalContainer"></div>
 
      <textarea id="postDescription" rows="3"></textarea><br>
      <input type='file' value="foto" placeholder="hola"/>
        <button id="btnPost">Publicar</button>
    </form>
    <div id="newPost"></div>
   </section>`;
  mainContainer.querySelector('#btnSignOut').addEventListener('click', () => {
    exit().then(onNavigate('/login'));
  });
  const postForm = mainContainer.querySelector('#postForm');
  let editStatus = false;
  let id = '';
  const showPosts = async (newPost) => {
    const modalContainer = mainContainer.querySelector('#modalContainer');
    onGetPost((querySnapshot) => {
      const auth = getAuth();
      const user = auth.currentUser;
      const contLike = 0;
      let html = '';
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        if (post.description !== '') {
          html += `
          <div class="cardPost">
            <p class="textPost">${post.description}</p>
            <button class="btnsCrud" data-id="${doc.id}">:ab:</button>
            <div class="btnsPost">
              <button class="btnDelete" data-id="${doc.id}">🗑</button>
              <button class="btnEdit" data-id="${doc.id}">🖉</button>
            </div>
            <div><button class="btnLikes" data-id="${doc.id}" > :white_heart:</button> <span>${post.likes}</span> </div><br>
            <div> -------------->${post.date.toDate()} </div>
          </div>`;
        }
      });

      // eslint-disable-next-line no-param-reassign
      newPost.innerHTML = html;
      const btnLikes = newPost.querySelectorAll('.btnLikes');
      btnLikes.forEach((btn) => btn.addEventListener('click', ({ target: { dataset } }) => {
        // eslint-disable-next-line no-plusplus
        getOnlyPost(dataset.id).then((v) => console.log(v.data().likes = v.data().likes + 1));
      }));

      const btnDelete = newPost.querySelectorAll('.btnDelete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
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
          postForm.btnPost.innerText = 'Guardar Cambios';
        });
      });
      mainContainer.querySelectorAll('.btnsCrud').forEach((btnCrud) => {
        btnCrud.addEventListener('click', () => {
          mainContainer.querySelector('.btnsPost').classList.toggle('active');
        });
      });
    });
  };

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = postForm.postDescription;
    if (!editStatus) {
      savePost(description.value, 0);
    } else {
      updatePost(id, { description: description.value });
      editStatus = false;
      postForm.btnPost.innerText = 'Publicar';
    }
    postForm.reset();
  });
  const newPost = mainContainer.querySelector('#newPost');

  showPosts(newPost);
  const btnMenu = mainContainer.querySelector('#btnMenuContainer');
  const asideMain = mainContainer.querySelector('#asideMain');
  btnMenu.addEventListener('click', () => {
    asideMain.classList.toggle('active');
  });
  // mainContainer.querySelector('#dataGoogle').setAttribute('src', dataUserGoogle().photoURL);
  return mainContainer;
};
