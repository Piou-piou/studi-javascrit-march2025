// Validation du formulaire de manière globale au click sur submit
const form = document.getElementById('registration-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const target = event.currentTarget;
  const elements = target.elements;
  let validate = true;

  Array.from(elements).forEach((element) => {
    if (false === validateInput(element)) {
      validate = false;
    }
  });

  if (true === validate) {
    target.submit();
  }
});

// Validation des input au changement de valeur
const inputs = document.querySelectorAll('form input');
inputs.forEach((input) => {
  input.addEventListener('input', (event) => {
    validateInput(event.currentTarget);
  });
});

/**
 * Permet de valider un élément du formulaire
 * @param element = un input ou button du formulaire
 * @returns {boolean} true si valide false sinon
 */
function validateInput(element) {
  if (element.type === 'submit') {
    return true;
  }
  if (!element.required && element.value.length === 0) {
    resetElementError(element);

    return true;
  }

  const minlength = element.minLength;
  const errorDiv = element.parentElement.querySelector('.error');
  let validate = false;

  if (element.type === 'text' && ((minlength && element.value.length > minlength) || !minlength)) {
    validate = true;
    resetElementError(element);
    addElementSuccess(element);
  } else if (element.type === 'tel' && element.value.length === 10) {
    validate = true;
    resetElementError(element);
    addElementSuccess(element);
  } else {
    validate = false;

    errorDiv.innerText = element.dataset.error;
    element.classList.add('invalid');
    element.classList.remove('success');
  }

  return validate;
}

/**
 * Permet de réinitialiser un input et d'enlever l'état d'erreur
 * @param element
 */
function resetElementError(element) {
  const errorDiv = element.parentElement.querySelector('.error');
  errorDiv.innerText = '';
  element.classList.remove('invalid');
}

function addElementSuccess(element) {
  element.classList.add('success');
}