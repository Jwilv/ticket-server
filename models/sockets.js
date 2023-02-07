const TicketList = require("./ticket-list");



class Sockets {

    constructor(io) {
        this.io = io;

        //instancia de TicketList
        this.TicketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // on connection
        this.io.on('connection', (socket) => {
            console.log('cliente conectado');


            //Emitir al cliente conectado todas las bandas actuales
            socket.on('solicitar-ticket',(data, callback)=>{
                const newTicket  = this.TicketList.createTicket();
                callback(newTicket);
            })

            socket.on('siguiente-ticket',({agente, escritorio}, callback)=>{
                const siguienteTicket = this.TicketList.asignarTicket(agente, escritorio);
                callback(siguienteTicket);
            })
            
        })


    }
}

module.exports = Sockets