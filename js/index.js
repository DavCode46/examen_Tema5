const patterns = {
  /*name: /^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/, */
  name: /^[A-Z][Ña-zñáéíóúÁÉÍÓÚ'° ]+$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

const form = document.getElementById("form");
const inputName = document.getElementById("name");
const email = document.getElementById("email");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const infoBtn = document.getElementById("info-btn");
const message = document.getElementById("message");
let errorsMessage = document.getElementById("errors-message");

/* Función que valida los datos introducidos en el formulario */
const validate = (e) => {
  e.preventDefault();
  let errorsArray = [];

  inputName.value.trim() === "" &&
    errorsArray.push("El nombre es un campo obligatorio"),
    (inputName.style.outline = "1px solid red");
  !patterns.name.test(inputName.value.trim()) &&
    errorsArray.push(
      "Un nombre propio comienza siempre por una letra mayúscula y no contiene números"
    ),
    (inputName.style.outline = "1px solid red");
  !patterns.email.test(email.value.trim()) &&
    errorsArray.push("Introduce una dirección de correo electrónico válida"),
    (email.style.outline = "1px solid red");
  message.value.length < 10 && errorsArray.push("Mensaje demasiado corto"),
    (message.style.outline = "1px solid red");

  if (errorsArray.length === 0 && confirm("¿Desea enviar el formulario?")) {
    errorsMessage.textContent = "";
    form.submit();
  } else if (errorsArray.length > 0) {
    errorsMessage.textContent = "";
    errorsArray.forEach((error) => {
      errorsMessage.innerHTML += `<li>${error}</li>`;
    });
    errorsMessage.style.color = "red";
  }
};

/* Función que limpia los errores  */
const resetErrors = (id) => {
  const element = document.getElementById(id);
  element.style.outline = "none";
};

/* Almacena todos los elementos del formulario en un array */
const formElements = Array.from(form.elements);
/* Recorre los elementos del array y los limpia cuando editamos */
formElements.forEach((element) => {
  element.addEventListener("input", () => resetErrors(element.id));
});

/* Lanza una alerta en función del radio Button seleccionado */
infoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  radio1.checked &&
    alert(
      "Información adicional sobre las montañas de Asturias solicitada, en breve nos pondremos en contacto con usted"
    );
  radio2.checked &&
    alert(
      "Si su reserva es para este fin de semana póngase en contacto al número 693693693"
    );
});

/* Valida el formulario */
form.addEventListener("submit", validate);
