const video = document.getElementById('camera-stream');
const imgPhoto = document.getElementById('snap');
// const controls = document.getElementById('controls');
const btnTakePhoto = document.getElementById('take-photo');
const btnDeletePhoto = document.getElementById('delete-photo');
const errorMessage = document.getElementById('error-message');
const hidden_canvas = document.getElementById('canvass');
const btnAceptRegister = document.getElementById('btn-ok-register');
// Utilizamos la funcion getUserMedia para obtener la salida de la webcam
navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
const hideUI = () => {
  // controls.style.display = 'flex';
  video.style.display = 'flex';
  errorMessage.style.display = 'none';
}
const showMessageError = (errormsg, error) => {
  error = error || '';
  if(error){
    errorMessage.innerHTML = error;
  }
  errorMessage.innerText = errormsg;
  hideUI();
  errorMessage.style.display = 'flex';
}
const showVideo = () => {
  hideUI();
  video.style.display = 'flex';
  // controls.style.display = 'flex';
}
const takeSnapshot = () => { 
  const context = hidden_canvas.getContext('2d');
  const width = video.videoWidth;
  const height = video.videoHeight;
 
  if (width && height) { 
    hidden_canvas.width = width;
    hidden_canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
    // Convertimos la imagen del canvas en datarurl
    return hidden_canvas.toDataURL('image/png');
  }
}
if (!navigator.getMedia) {
  showMessageError('Tu navegador no soporta la funcion getMedia.');
} else {
  // Solicitamos la camara
  navigator.getMedia(
    {
      video: true,
    }, (stream) => {
      // A nuestro componente video le establecemos el src 
      video.src = window.URL.createObjectURL(stream);
      video.play();
      video.onplay = () => {
        showVideo();
      };
    }, (err) => {
      showMessageError('Ocurrio un error al obtener el stream de la webcam: ' + err.name, err);
    }
  );
}
btnTakePhoto.addEventListener('click', (event) => { 
  event.preventDefault();
  btnDeletePhoto.hidden = false;
  btnAceptRegister.hidden = false;
  btnTakePhoto.hidden = true;
  const snap = takeSnapshot();
  imgPhoto.setAttribute('src', snap);
  video.style.display = 'none';
  imgPhoto.style.display = 'flex';
  imgPhoto.classList.add('img-photo')
  video.pause();
});
btnDeletePhoto.addEventListener('click', (event) => {
  event.preventDefault();
  btnDeletePhoto.hidden = true;
  btnAceptRegister.hidden = true;
  btnTakePhoto.hidden = false;
  imgPhoto.setAttribute('src', '');
  imgPhoto.style.display = 'none';
  video.style.display = 'flex';
  video.play();
});