
const name = document.getElementById('name-input');
const email = document.getElementById('email-input');
const zip = document.getElementById('zipcode-input');
const phoneNumber = document.getElementById('phone-number-input');
const button = document.getElementById('button');

name.addEventListener('blur',validateName);
email.addEventListener('blur',validateEmail);
zip.addEventListener('blur',validateZip);
phoneNumber.addEventListener('blur',validatePhoneNumber);
button.addEventListener('click',submitForm);

function validateName() {
  const nameVal = name.value;
  const re = /^[a-zA-Z0-9]{4,12}$/ 

  if(!re.test(nameVal)) {
   name.classList.add('is-invalid');
  } else {
   name.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const emailVal = email.value;
  const re = /^([a-zA-Z0-9\.\-\_]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/ 

  if(!re.test(emailVal)) {
   email.classList.add('is-invalid');
  } else {
   email.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zipVal = zip.value;
  const re = /^[0-9]{5}$/

  if(!re.test(zipVal)) {
   zip.classList.add('is-invalid');
  } else {
   zip.classList.remove('is-invalid');
  }
}

function validatePhoneNumber() {
  const phoneNumberVal = phoneNumber.value;
  const re = /^\+\d{2,3}[ ]?\d{2,3}[ ]?\d{6,8}$/

  if(!re.test(phoneNumberVal)) {
   phoneNumber.classList.add('is-invalid');
  } else {
   phoneNumber.classList.remove('is-invalid');
  }
}

function submitForm(e) {
  const nameVal = name.value;
  const reName = /^[a-zA-Z0-9]{4,12}$/;
  
  const emailVal = email.value;
  const reEmail = /^([a-zA-Z0-9\.\-\_]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/;
  
  const zipVal = zip.value;
  const reZip = /^[0-9]{5}$/;

  const phoneNumberVal = phoneNumber.value;
  const rePhone = /^\+\d{2,3}[ ]?\d{2,3}[ ]?\d{6,8}$/;

  if(name.value === '' || email.value === '' || zip.value === '' || phoneNumber.value === ''){

    const div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.appendChild(document.createTextNode('Please fill up all fields'));
    
    const form = document.getElementById('form');
    const upperDiv = document.getElementById('upper-div');

    form.insertBefore(div,upperDiv);

    setTimeout(() => {
      div.remove();
    },3000)

  }

  if(reName.test(nameVal) && reEmail.test(emailVal) && reZip.test(zipVal) && rePhone.test(phoneNumberVal)){
    
    const div = document.createElement('div');
    div.className = 'alert alert-success';
    div.appendChild(document.createTextNode('User successfully added!'));

    const form = document.getElementById('form');
    const paragraph = document.getElementById('paragraph');

    form.insertBefore(div,paragraph);

    name.value = '';
    email.value = '';
    zip.value = '';
    phoneNumber.value = '';

    setTimeout(() => {
      div.remove();
    },3000);
  }


  e.preventDefault();
}