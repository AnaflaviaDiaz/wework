const headerP = document.getElementById("header-principal");
const formRegisterV = document.getElementById("register-visitor");

// components
headerP.innerHTML = headerPrincipal;
formRegisterV.innerHTML = formRegisterVisitor;

// se genera despues de traer los componentes
const btnLoginAdmin = document.getElementById("btn-loggin-admin");
const btnRegisterVisitor = document.getElementById("btn-register-visitor");

// botones
btnLoginAdmin.addEventListener("click", () => console.log("login admin"))
btnRegisterVisitor.addEventListener("click", () => console.log("hola"));