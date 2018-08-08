// Utilizamos la funcion getUserMedia para obtener la salida de la webcam
navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
const hideUI = () => {
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
}
const takeSnapshot = () => {
  const context = hidden_canvas.getContext('2d');
  const width = video.videoWidth;
  const height = video.videoHeight;
  if (width && height) {
    hidden_canvas.width = width;
    hidden_canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
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
