const patterns = {
    name:  /^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/,
    lastname:  /^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    phone: /^(?:\+\d{1,3}\s?)?\(?\d{1,4}\)?[-.\s]?\d{1,10}[-.\s]?\d{1,10}$/,
    dni: /^\d{8}[a-zA-Z]$/,
    postalCode: /^\d{5}$/,
    city: /^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/,
    address: /^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/,
    plate: /^\d{4}[A-Z]{3}\d{2}$/,
}

const form = document.getElementById('form');
const inputName = document.getElementById('name');
const email = document.getElementById('email');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const infoBtn = document.getElementById('info-btn');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');
const errorsMessage = document.getElementById('errors-message');

const validate = (e) => {
    e.preventDefault();
    let errorsArray = [];

    inputName.value.trim() === '' && errorsArray.push('El nombre es un campo obligatorio'), inputName.style.outline = '1px solid red';
    !patterns.name.test(inputName.value.trim()) && errorsArray.push('Un nombre propio comienza siempre por una letra mayúscula y no contiene números'), inputName.style.outline = '1px solid red';
    !patterns.email.test(email.value.trim()) && errorsArray.push()
}

const resetErrors = (id) => {
    const element = document.getElementById(id);
    element.style.outline = 'none';
}

const formElements = Array.from(formElements);

formElements.forEach(element => {
    element.addEventListener('input', () => resetErrors(element.id));
})