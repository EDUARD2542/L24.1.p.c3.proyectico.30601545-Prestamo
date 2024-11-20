export default class Cl_Prestamos {
    constructor(cliente, codigo, prestamo, meses,porcComisionMensual) {
        this.cliente = cliente,
        this.codigo = codigo,
        this.prestamo = prestamo,
        this.meses = meses,
        this.porcComisionMensual = porcComisionMensual
    }
    set cliente(cliente){
        this._cliente = cliente
    }
    get cliente(){
        return this._cliente;
    }

    set codigo(codigo){
        this._codigo = codigo
    }
    get codigo(){
        return this._codigo;
    }

    set prestamo(prestamo){
        this._prestamo = prestamo
    }
    get prestamo(){
        return this._prestamo;
    }

    set meses(meses){    
        this._meses = meses
    }
    get meses(){
        return this._meses;  

    }

    set porcComisionMensual(porcComisionMensual){
        this._porcComisionMensual = +porcComisionMensual
    }

    get porcComisionMensual(){
        return this._porcComisionMensual
    }
    comision(){
        return this.prestamo * (this.porcComisionMensual / 100)
    }
}