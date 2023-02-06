const Ticket = require('./ticket')

class TicketList {

    constructor() {
        this.ultimoNum = 0;
        this.pendientes = [];
        this.asignados = [];
    }

    get siguienteNum() {
        this.ultimoNum++;
        return this.ultimoNum;
    }

    get showNumbers() {
        return this.asignados.slice(0, 13)
    }

    createTicket() {
        const newTicket = new Ticket(this.siguienteNum);
        this.pendientes.push(newTicket)
        return newTicket
    }

    asignarTicket(agente, escritorio) {
        if(this.pendientes.length === 0){
            return null
        }

        const siguienteTicket = this.pendientes.shift();

        siguienteTicket.agente = agente;
        siguienteTicket.escritorio = escritorio;

        this.asignados.unshift(siguienteTicket);

        return siguienteTicket
    }
}

module.exports = TicketList;