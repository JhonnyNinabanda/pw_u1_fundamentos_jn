/*
 PRIMERA FORMA (Calculo con dos numeros a la vez  )
 */

// Referencia al display

// Referencia al display
let display = document.getElementById("display");

// Variables globales
let numeroActual = "";
let numeroAnterior = "";
let operacion = null;

// Función principal que controla las acciones
function mostrarDisplay(valor) {
    if (valor === 'C') {
        limpiarDisplay();
    } else if (valor === '←') {
        borrarUltimo();
    } else if (valor === '=') {
        calcularOperacion();
    } else if (['+', '-', '*', '/', '%'].includes(valor)) {
        seleccionarOperacion(valor);
    } else {
        agregarNumero(valor);
    }
}

// Agregar números al display
function agregarNumero(num) {
    numeroActual += num;
    display.innerText = numeroActual;
}

// Limpiar pantalla y variables
function limpiarDisplay() {
    numeroActual = "";
    numeroAnterior = "";
    operacion = null;
    display.innerText = "";
}

// Borrar el último número escrito
function borrarUltimo() {
    numeroActual = numeroActual.slice(0, -1);
    display.innerText = numeroActual;
}

// Guardar la operación (+, -, *, /, %)
function seleccionarOperacion(op) {
    if (numeroActual === "") return;
    if (numeroAnterior !== "") {
        calcularOperacion(); // Calcula si ya hay una operación previa
    }
    operacion = op;
    numeroAnterior = numeroActual;
    numeroActual = "";
}

// Calcular el resultado
function calcularOperacion() {
    let resultado;
    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(numeroActual);

    if (isNaN(num1) || isNaN(num2)) return;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : "Error";
            break;
        case '%':
            // 💡 Calculamos porcentaje del número anterior
            resultado = (num1 * num2) / 100;
            break;
        default:
            return;
    }

    display.innerText = resultado;
    numeroAnterior = resultado;
    numeroActual = "";
    operacion = null;
}

