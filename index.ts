const form = document.querySelector('form');

const validatePassword = () => {
  const field: any = document.querySelector('#pass');
  if (field.value.length < 10) {
      alert('stop!!!!!');
  }
};

const eventSubmit = (event) => {
    validatePassword();
};

form.addEventListener('submit', eventSubmit);