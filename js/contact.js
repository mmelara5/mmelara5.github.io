function sendMessage() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    fetch('http://127.0.0.1:5000/enviarMensaje', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ nombre, correo, telefono, mensaje })
          })
          .then(response => response.text())
          .then(message => {
            alert(message);
            cleanMessageForm();
          })
          .catch(error => console.error('Error:', error));
    }

  function cleanMessageForm() {
    const nombre = document.getElementById('nombre').value = "";
    const correo = document.getElementById('correo').value = "";
    const telefono = document.getElementById('telefono').value = ""; 
    const mensaje = document.getElementById('mensaje').value = "";
  }