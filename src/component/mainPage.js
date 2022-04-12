/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { exit } from '../controllers/auth.js';

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
  return mainContainer;
};
