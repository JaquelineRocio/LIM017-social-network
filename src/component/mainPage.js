/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { exit } from '../controllers/auth.js';
import {
  savePost, updatePost, onGetPost, deletePost, getOnlyPost, dataUser,
  addLike, getLikes, deleteLike, getUser,
} from '../config/configFirestore.js';

export const mainPage = () => {
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('mainPage');
  mainContainer.innerHTML = `<header id="headerMain">
    <img id="logoMain" src="img/LogoRemasterizado.png">
    <div id="userName"></div>
    <img id="dataGoogle">
    <button id="btnSignOut"><i class="fa-solid fa-right-from-bracket"></i>Cerrar Sesión</button>
    <button id="btnMenuContainer"> <i class="fa-solid fa-bars"></i> </button> 
   </header>
   
   <aside id="asideMain">
    <ul id="ulGroup">
      <li class="liGroup" id="perfil"><i class="fa-solid fa-user icons"></i> Perfil</li>
      <li class="liGroup">Normas de convivencia de la comunidad</li>
      <li class="liGroup">1. Realizar publicaciones con respeto </li>
      <li class="liGroup">2. Respeta la privacidad de terceras personas</li>
      <li class="liGroup">3. Publica temas relacionados a mascotas.</li>
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
  mainContainer.querySelector('#perfil').addEventListener('click', () => {
    onNavigate('/profile');
  });
  mainContainer.querySelector('#btnSignOut').addEventListener('click', () => {
    exit().then(onNavigate('/login'));
  });
  const postForm = mainContainer.querySelector('#postForm');
  let editStatus = false;
  let id = '';
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = postForm.postDescription;
    if (!editStatus && description.value !== '') {
      savePost(description.value, dataUser().uid);
    } else {
      updatePost(id, { description: description.value });
      editStatus = false;
      postForm.btnPost.innerText = 'Publicar';
    }
    postForm.reset();
  });
  const newPost = mainContainer.querySelector('#newPost');

  // eslint-disable-next-line no-shadow
  const showPosts = async (newPost) => {
    const modalContainer = mainContainer.querySelector('#modalContainer');
    onGetPost((querySnapshot) => {
      let html = '';
      querySnapshot.forEach(async (doc) => {
        const post = doc.data();

        if (post.description !== '' && post.description !== ' ') {
          html += `
            <div class="cardPost">
              <div class="userContainer"> <img class="imgUserPost" src="../img/user.png"><div class= "nameUser" data-id="${doc.id}"></div></div><button class="btnsCrud" data-id="${doc.id}"></button>
              <div class= "divDate"> ${post.date.toDate().toString().slice(0, 21)} </div>
              <p class="textPost">${post.description}</p>
              <div class="btnsPost" data-id="${doc.id}">
                <button class="btnDelete" data-id="${doc.id}">🗑</button>
                <button class="btnEdit" data-id="${doc.id}">🖉</button>
              </div>
              <div class="divLikes" ><button class="btnLikes" data-id="${doc.id}" >🤍<span class="spanLikes">${post.likes}</span></button>  </div>
            </div>`;
          const doc2 = await getOnlyPost(doc.id);
          const userDataId = doc2.data().userId;
          if (dataUser().uid === userDataId) {
            mainContainer.querySelector(`.btnsCrud[data-id="${doc.id}"]`).innerHTML = '...';
          }
          const userResult = await getUser(post.userId);
          const nameDivs = newPost.querySelector(`[data-id="${doc.id}"]`);
          nameDivs.innerText = userResult.data().firstName;
        }
      });

      // eslint-disable-next-line no-param-reassign
      newPost.innerHTML = html;
      const btnLikes = newPost.querySelectorAll('.btnLikes');
      btnLikes.forEach((btn) => {
        btn.addEventListener('click', async ({ target: { dataset } }) => {
          const doc = await getOnlyPost(dataset.id);
          id = doc.id;
          const dataUsuario = await dataUser();
          editStatus = true;
          const likes = await getLikes(id);
          const likesUserId = likes.map((e) => e.data().userId);
          const filterLike = likes.map((elem) => {
            if (elem.data().userId === dataUsuario.uid) { return elem.id; }
          });
          if (!likesUserId.includes(dataUsuario.uid)) {
            addLike(id, dataUser().uid);
          } else {
            // btnLikes.value = post.likes + 1;
            deleteLike(id, filterLike.toString());
          }
          updatePost(id, { likes: likes.length });
        });
      });
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
        btnCrud.addEventListener('click', async ({ target: { dataset } }) => {
          const doc2 = await getOnlyPost(dataset.id);
          const userDataId = doc2.data().userId;
          if (dataUser().uid === userDataId) {
            mainContainer.querySelector(`.btnsPost[data-id="${dataset.id}"]`).classList.toggle('active');
          }
        });
      });
    });
  };

  showPosts(newPost);
  const btnMenu = mainContainer.querySelector('#btnMenuContainer');
  const asideMain = mainContainer.querySelector('#asideMain');
  btnMenu.addEventListener('click', () => {
    asideMain.classList.toggle('active');
  });
  return mainContainer;
};
