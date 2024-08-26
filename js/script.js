document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    //* Antes de hacer el submit el formulario este validado

    validateForm();
  });

  //* A realizar las validaciones.

  function validateForm() {
    let isValid = true;
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);

    //** este if esta optimizado ya que negamos desde el principio */
    if (!validateLength(nombre, 3)) {
      // console.log('El nombre debe contener al menos 3 caracteres'); //Log de prueba
      setError("errorNombre", "El nombre debe contener al menos 3 caracteres");
    }

    if (!validateEmail(email)) {
      setError("errorEmail", "El email no es valido");
      isValid = false;
    }

    if (!validateLength(mensaje, 26)) {
      setError("errorArea", "El mensaje debe contener al menos 26 caracteres");
      isValid = false;
    }
    sendmessage();
  }

  // aca validamos la longitud de los caracteres en el formulario web.
  function validateLength(value, minLength) {
    return value.length >= minLength;
  }
  //*   /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  esto es una de tantas regex que validan caracteres en una validacion de email.
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  //
  function setError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
});
