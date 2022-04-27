function sendMes(){
   let nombre = document.getElementById('nombre').value;

   let email = document.getElementById('email').value;

   let asunto = document.getElementById('asunto').value;

   let mensaje = document.getElementById('mensaje').value;
    
  if (document.getElementById('enviar').onclick) {
      alert('Su mensaje ha sido enviado con éxito');
  } 

   console.log(nombre + ' - ' + email + ' - ' + asunto + ' - ' + mensaje)
}
