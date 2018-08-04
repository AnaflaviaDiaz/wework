const sectionRegisterVisitor = document.getElementById("register-visitor");
const sectionLoginAdmin = document.getElementById("login-admin");
const btnToLoginAdmin = document.getElementById("btn-to-loggin-admin");
const btnOkRegisterVisitor = document.getElementById("btn-ok-register-visitor");
const btnToMain = document.getElementById("btn-to-main");
const btnOkLoginAdmin = document.getElementById("btn-ok-login-admin");

const goToLoginAdmin = () => {
	sectionRegisterVisitor.style.display = "none";
	sectionLoginAdmin.style.display = "block";
}

const goToMain = () => {
	sectionLoginAdmin.style.display = "none";
	sectionRegisterVisitor.style.display = "block";
}

// botones
btnToLoginAdmin.addEventListener("click", () => {
	goToLoginAdmin();
});
btnOkRegisterVisitor.addEventListener("click", () => console.log("aceptar registro"));

btnToMain.addEventListener("click", () => {
	goToMain();
});
btnOkLoginAdmin.addEventListener("click", () => console.log("aceptar login admin"));
