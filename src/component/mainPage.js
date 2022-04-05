import { onNavigate } from '../main.js';
import { savePost, getPost } from '../config/configFirestore.js';

export const mainPage = () => {
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('mainPage');
  mainContainer.innerHTML = `<header id="headerMain">
    <img id="logoMain" src="img/LogoRemasterizado.png">
    <input type="text" id="inputSearch" placeholder="Buscar ..."/>
    <div id="userName"></div>
    <button id="btnSignOut"><i class="fa-solid fa-right-from-bracket"></i>Cerrar Sesión</button>
    <button id="btnMenuContainer"> <i class="fa-solid fa-bars"></i> </button>
   </header>
   <aside id="asideMain">
    <ul id="ulGroup">
      <li class="liGroup">Grupo 1</li>
      <li class="liGroup">Grupo 1</li>
      <li class="liGroup">Grupo 1</li>
      <li class="liGroup">Grupo 1</li>
    </ul>
   </aside>
   <section id="postSection">
    <form id="postForm">
      <textarea id="postDescription" rows="5"></textarea>
        <button id="btnPost">Publicar</button>
    </form>
    <div id="newPost"></div>
   </section>`;
  mainContainer.querySelector('#btnSignOut').addEventListener('click', () => onNavigate('/login'));
  const btnMenu = mainContainer.querySelector('#btnMenuContainer');
  const asideMain = mainContainer.querySelector('#asideMain');
  btnMenu.addEventListener('click', () => {
    asideMain.classList.toggle('active');
  });
  const postForm = mainContainer.querySelector('#postForm');
  const newPostsContainer = mainContainer.querySelector('#newPost');
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

  return mainContainer;
};
