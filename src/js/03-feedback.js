import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
updateIput();

formEl.addEventListener('input', throttle(addInputVelue, 500));

const formData = {};

function addInputVelue(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

formEl.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
  console.log('Данные формы:', formData);
}

function updateIput() {
  const iputData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (iputData) {
    formEl.email.value = iputData.email;
    formEl.message.value = iputData.message;
  }
}
