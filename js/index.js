/* PRÉSTAMOS
Se desea llevar un control de los préstamos que
realiza una oficina. Se tiene por cada préstamo: nombre
del cliente, código del préstamo, monto y cantidad de
meses. Se requiere de un programa que permita el
registro de esta información, conociendo al principio de
la ejecución el monto disponible para préstamos y el
porcentaje de comisión mensual que se cobrará.
Estructuras de datos recomendadas
 Cl_oficina: montoCaja, porcComisionMensual
 Cl_prestamo: cliente, codigo, prestamo, meses
Primeros requerimientos
 Los datos entrada vienen en un archivo (con
import... ver anexo)
 Monto final disponible
 Clientes que pidieron por 2 meses
 Clientes que pidieron el préstamo mínimo*/
import Cl_Oficina from './Cl_Oficina.js'
import Cl_Prestamos from './Cl_prestamo.js'
import Dt_prestamos from './Dt_Prestamos.js'
import Dt_oficina from './Dt_Oficina.js'

const oficina = new Cl_Oficina();

Dt_prestamos.forEach((prestamos) => {
    oficina.montoDisponible = Dt_oficina.montoDisponible,
    oficina.porcComisionMensual = Dt_oficina.porcComisionMensual,
    oficina.agregarPrestamos(
        new Cl_Prestamos(prestamos.cliente, 
                        prestamos.codigo,
                        prestamos.prestamo, 
                        prestamos.meses,
                        Dt_oficina.porcComisionMensual)
    )
});

let clientesQuePidieronElMenorPrestamo = (oficina, salida) => {
    let prestamos = oficina.clientesQuePidieronElMenorPrestamo();
    salida.innerHTML = `<br>Clientes que pidieron el menor prestamo: <br>`;
    prestamos.forEach((clientes) => {
      salida.innerHTML += `<br>
      <table>
      <tr>
        <th>Cliente</th>
      </tr>
      <tr>
        <td>${JSON.stringify(clientes)}</td>
      </tr>
      </table>`;
    });
  };

let montoFinalDisponible = (oficina, salida) => {
    let montoFinal = oficina.montoFinalDisponible();
    salida.innerHTML = `<br>Monto final disponible: ${montoFinal}`;
  };

let clientesQuePidieron2Meses = (oficina, salida) => {
    let prestamos = oficina.clientesQuePidieron2Meses();
    salida.innerHTML = `<br>Clientes que pidieron 2 meses: <br>`;
    prestamos.forEach((prestamos) => {
      salida.innerHTML += `<br>
      <table>
      <tr>
        <th>Cliente</th>
      </tr>
      <tr>
        <td>${prestamos.cliente}</td>
      </tr>
      </table>`;
    });
  };

let agregarPrestamos = (oficina) => {
        let cliente = prompt("Ingrese el nombre del cliente");
        let codigo = prompt("Ingrese el codigo del prestamo");
        let prestamo = prompt("Ingrese el prestamo");
        let meses = prompt("Ingrese la cantidad de meses");
        oficina.agregarPrestamos(new Cl_Prestamos(cliente,codigo, prestamo, meses, Dt_oficina.porcComisionMensual));
      };
let eliminarPrestamos = (oficina) => {
  let codigo = prompt("Ingrese el codigo del prestamo a eliminar");
  if (oficina.eliminarPrestamos(codigo)) alert(`Se eliminó el prestamo ${codigo}`);
  else alert(`No existe el Prestamo ${codigo}`);
  
}      

let listarPrestamos = (oficina, salida) =>{
  salida.innerHTML = `<br>Clientes que pidieron 2 meses: <br>`;
    oficina.prestamos.forEach((prestamos) => {
        salida.innerHTML += `<br>
        <table>
        <tr>
          <th>Cliente</th>
          <th>Codigo</th>
          <th>Prestamo</th>
          <th>Meses</th>
          <th>Comision</th>
        </tr>
        <tr>
          <td>${prestamos.cliente}</td>
          <td>${prestamos.codigo}</td>  
          <td>${prestamos.prestamo}</td>
          <td>${prestamos.meses}</td>
          <td>${prestamos.comision()}</td>
        </tr>
        </table>`;
    })
}
    

let salida1 = document.getElementById("salida1"),
    salida2 = document.getElementById("salida2"),
    opciones = document.getElementById("opciones");      
  
    salida1.innerHTML = `<br>Seleccione una opción:
    <br>1= Agregar Prestamo
    <br>2= Listar Prestamos
    <br>3= Clientes que pidieron el menor prestamo
    <br>4= Monto final disponible
    <br>5= Clientes que pidieron 2 meses
    <br>6= Eliminar Prestamo`;

    opciones.onclick = () => {
        let opcion = prompt("Seleccione una opcion");
        switch (opcion) {
          case "1":
            agregarPrestamos(oficina);
            break;
          case "2":
            listarPrestamos(oficina, salida2);
            break;
          case "3":
            clientesQuePidieronElMenorPrestamo(oficina, salida2);
            break;
          case "4":
            montoFinalDisponible(oficina, salida2);
            break;
          case "5":
            clientesQuePidieron2Meses(oficina, salida2);
            break;
          case "6":
            eliminarPrestamos(oficina);
            break;
        }
      };