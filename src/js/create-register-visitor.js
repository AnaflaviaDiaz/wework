window.createVisitor = () => {
  firebase.database().ref().child('visitors').push({
    name: txtNameVisitor.value,
    dni: parseInt(txtDniVisitor.value),
    celular: parseInt(txtCelVisitor.value),
    photo: imgPhoto.getAttribute('src'),
    visitto: selectWorker.options[selectWorker.selectedIndex].value,
    date: firebase.database.ServerValue.TIMESTAMP
  });
}
