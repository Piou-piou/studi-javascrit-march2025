const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const target = event.currentTarget;
  const elements = target.elements;
  let validate = false;

  Array.from(elements).forEach((element) => {
    if (element.type === 'submit') {
      return;
    }

    const minlength = element.minLength;
    const errorDiv = element.parentElement.querySelector('.error');

    if (element.type === 'text' && minlength && element.value.length > minlength) {
      validate = true;
      resetElementError(element);
    } else if (element.type === 'text' && !minlength && element.value.length > 0) {
      validate = true;
      resetElementError(element);
    } else {
      validate = false;

      errorDiv.innerText = element.dataset.error;
      element.classList.add('invalid');
    }
  });

  if (true === validate) {
    //target.submit();
  }
});

function resetElementError(element) {
  const errorDiv = element.parentElement.querySelector('.error');
  errorDiv.innerText = '';
  element.classList.remove('invalid');
}