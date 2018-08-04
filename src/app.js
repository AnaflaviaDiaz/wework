const sectionRegisterVisitor = document.getElementById("register-visitor");
const sectionLoginAdmin = document.getElementById("login-admin");
const btnToLoginAdmin = document.getElementById("btn-to-loggin-admin");
const btnOkRegisterVisitor = document.getElementById("btn-ok-register-visitor");
const btnToMain = document.getElementById("btn-to-main");
const btnOkLoginAdmin = document.getElementById("btn-ok-login-admin");
const txtNameVisitor = document.getElementById("txt-name-visitor");
const txtDniVisitor = document.getElementById("txt-dni-visitor");
const txtCelVisitor = document.getElementById("txt-cel-visitor");
const wrongName = document.getElementById("wrong-name");
const wrongDni= document.getElementById("wrong-dni");
const wrongCel = document.getElementById("wrong-cel");

const goToLoginAdmin = () => {
	sectionRegisterVisitor.style.display = "none";
	sectionLoginAdmin.style.display = "block";
}

const goToMain = () => {
	sectionLoginAdmin.style.display = "none";
	sectionRegisterVisitor.style.display = "block";
}

const showValidateRegisterVisitor = (validate) => {
	if (validate.name) wrongName.hidden = true;
  else wrongName.hidden = false;

  if (validate.dni) wrongDni.hidden = true;
	else wrongDni.hidden = false;

	if (validate.cel) wrongCel.hidden = true;
  else wrongCel.hidden = false;

  if (validate.name && validate.dni && validate.cel) console.log("todo correcto");
}

// botones
btnToLoginAdmin.addEventListener("click", () => {
	goToLoginAdmin();
});
btnOkRegisterVisitor.addEventListener("click", () => {
	const validate = validateRegisterVisitor(txtNameVisitor.value, txtDniVisitor.value, txtCelVisitor.value);
	showValidateRegisterVisitor(validate);
});

btnToMain.addEventListener("click", () => {
	goToMain();
});
btnOkLoginAdmin.addEventListener("click", () => {
	
});
