const {io} = require('../server');

io.on('connection', (client) => { 

    console.log('Usuario conectado');

    // Enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });
    
    // Recibir mensaje de desconeccion del cliente
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar un mensaje del cliente
    client.on('enviarMensaje', (data, callback) => {
        
        console.log(data);
        
        // Para enviar un mensaje a tdos
        client.broadcast.emit('enviarMensaje', data);

     /*   
        if (mensaje.usuario) { 
            callback({
                resp : 'TODO SALIO BIEN'
            });
        }else{
            callback({
                resp : 'TODO SALIO MAL'
            });
        }
        */
    });

});