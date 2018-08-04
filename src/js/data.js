window.validateRegisterVisitor = (name, dni, cel) => {
  const visitor = {
    name: false,
    dni: false,
    cel: false
  }
  visitor.name = name.length > 3;
  visitor.dni = dni.length === 8;
  visitor.cel = cel.length >= 9;
  return visitor;
}

window.validateLoginAdmin = (email, password) => {
  const patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const admin = {
    email: false,
    password: false
  }
  admin.email = email.length > 5 && patronEmail.test(email);
  admin.password = password.length > 5;
  return admin;
}