const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /^(?=\w*\d)\S{6,10}$/;

export default function validation(inputs) {
  const userErrors = {};
  if (!regexEmail.test(inputs.username)) {
    userErrors.username = "El Username debe ser un email";
  }
  if (!inputs.username) {
    userErrors.username = "Username no puede estar vacío";
  } else if (inputs.username.length > 35) {
    userErrors.username = "El Username no debe contener más de 35 caracteres";
  }

  if (!regexPass.test(inputs.password)) {
    userErrors.password =
      "La contraseña debe contener al menos 1 número y tener entre 6 a 10 caracteres";
  }

  return userErrors;
}
