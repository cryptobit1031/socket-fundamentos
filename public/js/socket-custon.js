var socket = io();
/* Esta función me dice cuando estoy conectado con el servidor*/
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

/* Esta función me dice cuando estoy desconectado del servidor*/
socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor');
});


// Enviar informacion
// ---> Envia estacion a servidor
socket.emit('enviarMensaje', {
    usuario: 'Mairon',
    mensaje: 'Hola Mundo'
},function(resp){
    console.log('Respuesta Server',resp);
});


// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});