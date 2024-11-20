export default class Cl_Oficina {
    constructor(porcComisionMensual,montoDisponible) {
        this.prestamos = [],
        this.porcComisionMensual = porcComisionMensual,
        this.montoDisponible = montoDisponible
    }

    set montoDisponible(montoDisponible) {
        this._montoDisponible = +montoDisponible
    }

    get montoDisponible() {
        return this._montoDisponible
    }


    agregarPrestamos(prestamos) {
        this.prestamos.push(prestamos);
    }

    eliminarPrestamos(codigo){
        codigo = +codigo
        let indexPrestamo=-1;
        for (let i = 0; i < this.prestamos.length; i++) 
            if (this.prestamos[i].codigo == codigo) indexPrestamo = i;
            
        
            if (indexPrestamo != -1) this.prestamos.splice(indexPrestamo, 1);
                return indexPrestamo != -1
        }

    
    montoFinalDisponible() {
        let montoFinal = this.montoDisponible

        this.prestamos.forEach((prestamos) => {
            montoFinal -= prestamos.prestamo
        });
        return montoFinal
    }

    clientesQuePidieron2Meses() {
        let clientes = [];
        this.prestamos.map((prestamos) => {
            if (prestamos.meses == 2) {
                clientes.push(prestamos);
            }
        });
        return clientes;
    }
    clientesQuePidieronElMenorPrestamo() {
        let menorPrestamo = this.prestamos[0].prestamo;

        this.prestamos.map((prestamos) => {
            if (prestamos.prestamo < menorPrestamo) {
                menorPrestamo = prestamos.prestamo;
            }
        });
        let clientes = [];
        this.prestamos.map((prestamos) => {
            if (prestamos.prestamo == menorPrestamo) {
                clientes.push(prestamos.cliente);
            }
        });
        return clientes;
            
        
    
    }

}
