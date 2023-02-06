const BandList = require("./band-list");


class Sockets {

    constructor(io) {
        this.io = io;

        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        // on connection
        this.io.on('connection', (socket) => {
            console.log('cliente conectado');


            //Emitir al cliente conectado todas las bandas actuales
            socket.emit('current-bands', this.bandList.getBands())

            socket.on('votar-band', (id)=>{
                this.bandList.increaseVotes(id);
                this.io.emit('current-bands', this.bandList.getBands())
            })

            socket.on('delete-band', (id)=>{
                this.bandList.removeBands(id);
                this.io.emit('current-bands', this.bandList.getBands())
            })

            socket.on('change-name', ({id,name})=>{
                this.bandList.changeName(id,name);
                this.io.emit('current-bands', this.bandList.getBands())
            })

            socket.on('add-band', ({name})=>{
                this.bandList.addBand(name);
                this.io.emit('current-bands', this.bandList.getBands())
            })

        })


    }
}

module.exports = Sockets