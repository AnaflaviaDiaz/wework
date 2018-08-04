window.validateRegisterVisitor = (name, dni, cel) => {
  let visitor = {
    name: false,
    dni: false,
    cel: false
  }
  visitor.name = name.length > 3;
  visitor.dni = dni.length === 8;
  visitor.cel = cel.length >= 9;
  return visitor;
}