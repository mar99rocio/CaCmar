let menuVisible = false;
//FunciÃ³n que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        } 
        else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".formulario");
  const nombre = document.querySelector("#nombre");
  const email = document.querySelector("#email");
  const telefono = document.querySelector("#telefono");
  const mensaje = document.querySelector("#mensaje");

  formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validarFormulario()) {
          // Si el formulario es válido, puedes enviar los datos
          console.log("Formulario válido. Enviando datos...");
      }
  });

  function validarFormulario() {
      let esValido = true;

      // Valida el campo Nombre
      if (nombre.value.trim() === "") {
          esValido = false;
          alert("Por favor, ingrese su nombre.");
          nombre.focus();
      }

      // Valida el campo Email
      if (email.value.trim() === "") {
          esValido = false;
          alert("Por favor, ingrese su dirección de correo electrónico.");
          email.focus();
      } else if (!validarEmail(email.value)) {
          esValido = false;
          alert("El formato del correo electrónico no es válido.");
          email.focus();
      }

      // Valida el campo Teléfono (opcional)
      if (telefono.value.trim() !== "" && !validarTelefono(telefono.value)) {
          esValido = false;
          alert("El formato del teléfono no es válido.");
          telefono.focus();
      }

      // Valida el campo Mensaje
      if (mensaje.value.trim() === "") {
          esValido = false;
          alert("Por favor, ingrese un mensaje.");
          mensaje.focus();
      }

      return esValido;
  }

  // Función para validar el formato del correo electrónico
  function validarEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Función para validar el formato del teléfono (opcional)
  function validarTelefono(telefono) {
      const telefonoRegex = /^\d{10}$/; // Asumiendo que el teléfono debe tener 10 dígitos
      return telefonoRegex.test(telefono);
  }
});