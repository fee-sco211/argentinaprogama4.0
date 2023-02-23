let ticketManager=[];

class CrearEvento{
    constructor(nombre,lugar,precio,capacidad,fecha){
        this.nombre = nombre,
        this.lugar = lugar,
        this.precio = precio,
        this.capacidad = capacidad,
        this.fecha = fecha,
        this.id=+1
    }

    precioBaseDeGanacia(precio){
        this.precio=precio*1.15;
    }

    paticipantes(nombre){
        
    }

}

