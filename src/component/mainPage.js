export const mainPage = () => {
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('mainPage');
  mainContainer.innerHTML = 
  `<header id="headerMain">
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
   </aside>`;

 /* mainContainer.innerHTML = `<header class="header">
  <div class="logo">
    <img src="img/logoMejorado.png" alt="Logo">
  </div> 
  <input type="text" id="inputSearch" placeholder="Buscar ..."/>
  <div class="icons">
    <a href="#">
    <img src="img/huellita.png" alt="Perdidos">
    </a>
    <a href="#">
      <img src="img/solicitudes.png" alt="Solicitudes">
    </a>
    <a href="#">
      <img src="img/mensajes.png" alt="Mensajes">
    </a>
    <a href="#">
      <img src="img/menu.png" alt="Menú">
    </a>
</header>
<main class="main">
<img class="imagen" src="img/post.jpg" alt="post">
</main>`;*/

  return mainContainer;
};
