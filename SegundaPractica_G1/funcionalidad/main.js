import {valorCuota,listarDatos} from './operaciones.js'

const botonCalcular = document.getElementById("calcular");
const verHistorial = document.getElementById("recordar");
const laSalida = document.getElementById("resultadoPrestamo");

botonCalcular.addEventListener("click", calcularCuota);
verHistorial.addEventListener("click", recordarHistorial);
let historial = []

function calcularCuota() {
    try {
        let nombre = document.getElementById("elNombre").value
        let prestamo = parseFloat(document.getElementById("elPrestamo").value)
        let meses = parseInt(document.getElementById("losMeses").value)
        let interes = parseFloat(document.getElementById("losInteres").value)

        if (nombre == '' || isNaN(prestamo) || isNaN(meses) || isNaN(interes)) {
            throw new Error("Revisa tus datos de entreda")
        }

        let cuota = valorCuota(prestamo, interes, meses)

        let registro = {
            nombre,
            prestamo,
            meses,
            interes,
            cuota
        };

        historial.push(registro);

        console.log(nombre, prestamo, meses, interes, cuota)
        laSalida.textContent = nombre + " debe pagar $"
            + cuota + " cada mes por el prestamo de $"
            + prestamo + " a " + meses + " meses con el interes del " + interes + "%";
    } catch (error) {
        alert(error.message)
    }
}  

function calcularCuota1(){
    let nombre = document.getElementById("elNombre").value
    let prestamo = parseFloat(document.getElementById("elPrestamo").value)
    let meses = parseInt(document.getElementById("losMeses").value)
    let interes = parseFloat(document.getElementById("losInteres").value)

    if (nombre==''|| isNaN(prestamo) || prestamo<=500000 || isNaN(meses) || isNaN(interes)){
        alert("Debe rellenar todos los espacios e ingresar los valores numericos adecuados")
        return
    }

    let cuota = valorCuota(prestamo, interes, meses)

    let registro = {
            nombre,
            prestamo,
            meses,
            interes,
            cuota
        };

    historial.push(registro);

    console.log(nombre, prestamo, meses, interes,cuota)
    laSalida.textContent = nombre + " debe pagar $" 
        + cuota + " cada mes por el prestamo de $"
        + prestamo + " a " + meses + " meses con el interes del " + interes + "%";
}   

function recordarHistorial(){
    console.log(historial)
    laSalida.textContent = listarDatos(historial)
}