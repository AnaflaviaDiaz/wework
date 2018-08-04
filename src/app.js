const sectionRegisterVisitor = document.getElementById("register-visitor");
const sectionLoginAdmin = document.getElementById("login-admin");
const btnToLoginAdmin = document.getElementById("btn-to-loggin-admin");
const btnOkRegisterVisitor = document.getElementById("btn-ok-register-visitor");
const btnToMain = document.getElementById("btn-to-main");
const btnOkLoginAdmin = document.getElementById("btn-ok-login-admin");
const txtNameVisitor = document.getElementById("txt-name-visitor");
const txtDniVisitor = document.getElementById("txt-dni-visitor");
const txtCelVisitor = document.getElementById("txt-cel-visitor");
const txtEmailAdmin = document.getElementById("txt-email-admin");
const txtPasswordAdmin = document.getElementById("txt-password-admin");
const wrongName = document.getElementById("wrong-name");
const wrongDni= document.getElementById("wrong-dni");
const wrongCel = document.getElementById("wrong-cel");
const wrongEmail = document.getElementById("wrong-email");
const wrongPassword = document.getElementById("wrong-password");

const goToLoginAdmin = () => {
	sectionRegisterVisitor.style.display = "none";
	sectionLoginAdmin.style.display = "block";
}

const goToMain = () => {
	sectionLoginAdmin.style.display = "none";
	sectionRegisterVisitor.style.display = "block";
}

const showValidateRegisterVisitor = (visitor) => {
	if (visitor.name) wrongName.hidden = true;
  else wrongName.hidden = false;

  if (visitor.dni) wrongDni.hidden = true;
	else wrongDni.hidden = false;

	if (visitor.cel) wrongCel.hidden = true;
  else wrongCel.hidden = false;

  if (visitor.name && visitor.dni && visitor.cel) console.log("todo correcto");
}

const showValidateLoginAdmin = (admin) => {
	if (admin.email) wrongEmail.hidden = true;
  else wrongEmail.hidden = false;

  if (admin.password) wrongPassword.hidden = true;
	else wrongPassword.hidden = false;

  if (admin.email && admin.password) console.log("todo correcto");
}

// botones
btnToLoginAdmin.addEventListener("click", () => {
	goToLoginAdmin();
});
btnOkRegisterVisitor.addEventListener("click", () => {
	const visitor = validateRegisterVisitor(txtNameVisitor.value, txtDniVisitor.value, txtCelVisitor.value);
	showValidateRegisterVisitor(visitor);
});

btnToMain.addEventListener("click", () => {
	goToMain();
});
btnOkLoginAdmin.addEventListener("click", () => {
	const admin = validateLoginAdmin(txtEmailAdmin.value, txtPasswordAdmin.value);
	showValidateLoginAdmin(admin);
});
