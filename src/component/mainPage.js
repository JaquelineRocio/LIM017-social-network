/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { exit, dataUserGoogle } from '../controllers/auth.js';
// import {
//   savePost, updatePost } from '../config/configFirestore.js';

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
   <div id='dataGoogle'><img id='imgPerfil'></div>
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

  // let editStatus = false;
  // let id = '';
  // id = doc.id;
  // const postForm = mainContainer.querySelector('#postForm')
  // postForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const description = postForm.postDescription;
  //   if (!editStatus) {
  //     savePost(description.value);
  //   } else {
  //     updatePost(id, { description: description.value });
  //     editStatus = false;
  //     postForm.btnPost.innerText = 'Publicar';
  //   }
  //   postForm.reset();
  // });

  dataUserGoogle().providerData.forEach((profile) => {
    const nameUserGoogle = profile.displayName;
    const emailUserGoogle = profile.email;
    const photoUserGoogle = profile.photoURL;
    mainContainer.querySelector('#dataGoogle').innerText = nameUserGoogle + emailUserGoogle;
    // mainContainer.querySelector('#imgPerfil').src = photoUserGoogle;
  });
  return mainContainer;
};
