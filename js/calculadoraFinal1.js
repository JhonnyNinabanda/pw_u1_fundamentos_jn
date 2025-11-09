/*
// SEGUNDA FORMA (calculo en varias operaciones)
*/

// Referencia del display

let display = document.getElementById("display");

// Variable donde se guardará la operación actual
let operacion = "";

// Función principal: controla lo que aparece en pantalla
function mostrarDisplay(valor) {
    if (valor === 'C') {
        limpiarDisplay();
    } else if (valor === '←') {
        borrarUltimo();
    } else if (valor === '=') {
        calcular();
    } else {
        agregarValor(valor);
    }
}

// Limpia todo el display
function limpiarDisplay() {
    operacion = "";
    display.innerText = "";
}

// Borra el último carácter
function borrarUltimo() {
    operacion = operacion.slice(0, -1);
    display.innerText = operacion;
}

// Agrega un valor (número o símbolo) al display
function agregarValor(valor) {
    operacion += valor;
    display.innerText = operacion;
}

// Evalúa la operación y muestra el resultado
function calcular() {
    try {
        // Evalúa la cadena y muestra el resultado
        let resultado = eval(operacion);
        display.innerText = resultado;
        operacion = resultado.toString();
    } catch (error) {
        display.innerText = "Error";
        operacion = "";
    }
}