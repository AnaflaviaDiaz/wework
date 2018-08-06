const sectionTakePhotoVisitor = document.getElementById('take-photo-visitor');
const sectionRegisterVisitor = document.getElementById('register-visitor');
const sectionLoginAdmin = document.getElementById('login-admin');
const sectionSelectPerson = document.getElementById('select-person-to-visit');
const btnToLoginAdmin = document.getElementById('btn-to-loggin-admin');
const btnOkRegisterVisitor = document.getElementById('btn-ok-register-visitor');
const btnToMain = document.getElementById('btn-to-main');
const btnOkLoginAdmin = document.getElementById('btn-ok-login-admin');
const txtNameVisitor = document.getElementById('txt-name-visitor');
const txtDniVisitor = document.getElementById('txt-dni-visitor');
const txtCelVisitor = document.getElementById('txt-cel-visitor');
const txtEmailAdmin = document.getElementById('txt-email-admin');
const txtPasswordAdmin = document.getElementById('txt-password-admin');
const wrongName = document.getElementById('wrong-name');
const wrongDni = document.getElementById('wrong-dni');
const wrongCel = document.getElementById('wrong-cel');
const wrongEmail = document.getElementById('wrong-email');
const wrongPassword = document.getElementById('wrong-password');
const btnSendEmail = document.getElementById('btn-send-email');
const btnOkRegister = document.getElementById('btn-ok-register');
const selectWorker = document.getElementById('select-worker');
let emailValue;

window.onload = () => {
  userSesion();
}

const goToLoginAdmin = () => {
  sectionRegisterVisitor.style.display = 'none';
  sectionLoginAdmin.style.display = 'block';
}

const goToMain = () => {
  sectionLoginAdmin.style.display = 'none';
  sectionRegisterVisitor.style.display = 'block';
}

const showValidateRegisterVisitor = (visitor) => {
  if (visitor.name) wrongName.hidden = true;
  else wrongName.hidden = false;

  if (visitor.dni) wrongDni.hidden = true;
  else wrongDni.hidden = false;

  if (visitor.cel) wrongCel.hidden = true;
  else wrongCel.hidden = false;

  if (visitor.name && visitor.dni && visitor.cel) {
    sectionTakePhotoVisitor.style.display = 'block';
    sectionRegisterVisitor.style.display = 'none';
    console.log('todo correcto');
  }
}

const showValidateLoginAdmin = (admin) => {
  if (admin.email) wrongEmail.hidden = true;
  else wrongEmail.hidden = false;

  if (admin.password) wrongPassword.hidden = true;
  else wrongPassword.hidden = false;

  if (admin.email && admin.password) {
    const aprroved = loginAdmin(txtEmailAdmin.value, txtPasswordAdmin.value);
    aprroved.then(() => {
      console.log('se puede');
    }).catch(() => {
      wrongPassword.hidden = false;
    });
  };
}

const getWorkers = () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/workers.json', true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhrWorkers = JSON.parse(xhr.responseText);
      xhrWorkers.map((worker) => {
        selectWorker.innerHTML += `<option value='${worker.email}'>${worker.name}</option>`;
      });
    }
  }
  xhr.send();
}

// botones
btnToLoginAdmin.addEventListener('click', () => {
  goToLoginAdmin();
});
btnOkRegisterVisitor.addEventListener('click', () => {
  const visitor = validateRegisterVisitor(txtNameVisitor.value, txtDniVisitor.value, txtCelVisitor.value);
  showValidateRegisterVisitor(visitor);
});

btnToMain.addEventListener('click', () => {
  goToMain();
});
btnOkLoginAdmin.addEventListener('click', () => {
  const admin = validateLoginAdmin(txtEmailAdmin.value, txtPasswordAdmin.value);
  showValidateLoginAdmin(admin);
});
btnOkRegister.addEventListener('click', () => {
  if (imgPhoto.getAttribute('src') === null) {
    alert('aun no te has tomado una foto');
  } else {
    // createVisitor();
    getWorkers();
		sectionTakePhotoVisitor.style.display = 'none';
    sectionSelectPerson.style.display = 'block';
  }
});
selectWorker.addEventListener('change', () => {
  emailValue=selectWorker.options[selectWorker.selectedIndex].value;
  console.log(selectWorker.options[selectWorker.selectedIndex].value);
});
btnSendEmail.addEventListener('click', () => {
  createVisitor();
  sendDataMandrill(emailValue);
  console.log('Guardando en db');
  swal('Se envió el correo, espera la respuesta por favor', {
    icon: 'success',
  }).then(() => window.location.href = '../src/');
  // location.href = 'mailto:'+'anaflaviadmar@gmail.com'+'?cc='+'anaflaviadiazmartel5a@gmail.com'+'&subject='+'probando correos'+'&body='+'probando el detalle del correo';
});
