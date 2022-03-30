export const mainPage = () => {
  const navWelcome = document.createElement('nav');
  navWelcome.classList.add('mainPage');
  navWelcome.innerHTML = `<header class="header">
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
</main>`;

  return navWelcome;
};
