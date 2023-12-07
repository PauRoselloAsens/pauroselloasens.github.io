window.onload = function() {
  // Detectar si el dispositivo es un móvil
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Obtener el elemento h2 por su id
    var mensajeElement = document.getElementById('alertmobliedevice');
    // Cambiar el contenido del h2
    mensajeElement.innerHTML = '¡Oops! Este no es el mejor dispositivo para ver la página. <br> Prueba con un Ordenador.';
  }
};