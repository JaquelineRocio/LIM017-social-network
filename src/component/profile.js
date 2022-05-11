import { dataUser } from '../config/configFirestore.js';

export const profile = () => {
  const sectionProfile = document.createElement('section');
  sectionProfile.setAttribute('class', 'profile');
  sectionProfile.innerHTML = `<div id="cover">
  <img id="coverPhoto" src="../img/portada.jpg">
  <img id="profilePhoto" src=${dataUser().photoURL}></div>
  <div id="profileInformation">
  <h2 id="nameUserProfile">${dataUser().displayName}</h2>
  <p id="emailProfile"> <i class="fa-solid fa-envelope"></i>${dataUser().email}</p>
  <p id="dateOfBirth"><i class="fa-solid fa-cake-candles"></i></p>
  <p id="phoneNumberProfile"> <i class="fa-solid fa-square-phone"></i></p>
  <p id="genero"><i class="fa-solid fa-user"></i></p>
  </div>
  `;
  return sectionProfile;
};
