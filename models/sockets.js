


class Sockets {

    constructor(io) {
        this.io = io;


        this.socketEvents();
    }

    socketEvents() {
        // on connection
        this.io.on('connection', (socket) => {
            console.log('cliente conectado');


            //Emitir al cliente conectado todas las bandas actuales
            
        })


    }
}

module.exports = Sockets