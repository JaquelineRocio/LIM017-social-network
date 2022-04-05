export const errorRegister = (errorCode) => {
  switch (errorCode) {
    case 'Firebase: Error (auth/missing-email).': return 'El correo es obligatorio';
    case 'Firebase: Error (auth/invalid-email).': return 'Digite un correo válido';
    case 'Firebase: Error (auth/email-already-in-use).': return 'Este correo ya esta registrado, intente de nuevo.';
    case 'Firebase: Error (auth/internal-error).': return 'La contraseña es obligatoria';
    default: return errorCode;
  }
};
