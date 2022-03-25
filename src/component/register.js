/* eslint-disable no-unused-vars */
export const register = () => {
  const sectionRegister = document.createElement('section');
  sectionRegister.innerHTML = `<section>
  <form class="classForm">
    <h2>Información de pago</h2>
    <p>
        <label for="firstName">
        <span>Nombre:</span>
        </label>
        <input id="firstName" name="firstName" type="text" class='classInput'/>
        
    </p>
    <p>
        <label for="lastName">
        <span>Apellidos:</span>
        </label>
        <input id="lastName" name="lastName" type="text" class='classInput'/>
        
    </p>
    <p>
    <label for="email">
    <span>Correo:</span>
    </label>
    <input id="email" name="lastName" type="text" class='classInput'/>
    
</p>
    <p>
        <label for="phoneNumber">
        <span>Número de celular:</span>
        <strong><abbr title="required">*</abbr></strong>
        </label>
        <input type="tel" id="phoneNumber" name="phoneNumber" class='classInput'>
    </p>
    <p>
        <label for="birthday">
        <span>Fecha de nacimiento:</span>
        <strong><abbr title="required">*</abbr></strong>
        <em>el formato mm/aa</em>
        </label>
        <input type="date" id="birthday" name="expiration" class='classInput'>
    </p>
    <p>
      <label for="gender">
        <span>Género:</span>
      </label>
      <select id="gender" name="usercard">
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
    </p>
    <p>
    <label for="password"> Contraseña:<abbr title="required" aria-label="required">*</abbr> </label>
    <input type = "password" id="password" pattern=".{6,}" class='classInput'/>
    </p>
    <p>
    <label for="password"> Verificar Contraseña:<abbr title="required" aria-label="required">*</abbr> </label>
    <input type = "password" id="password" pattern=".{6,}" class='classInput'/>
    </p>
    </form>
    </section>`;

  return sectionRegister;
};
