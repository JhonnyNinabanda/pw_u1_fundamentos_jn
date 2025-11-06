/* =======================
   FUNCIONES DE MANIPULACIÓN DEL DOM
======================= */

// Función para cambiar el Color
function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}
// Funcion para camabiar el Tamaño de fuente
function cambiarTamanio(id_elemento, tamanio) {
    document.getElementById(id_elemento).style.fontSize = tamanio;
}
// Funcion para agrear Elementos
function agregarElemento1() {
    document.getElementById('id_div').innerHTML = '<h1>Calculadora</h1>';
}

function agregarElemento(elementoPadre, html) {
    document.getElementById(elementoPadre).innerHTML = html
}

function construirH1() {
    return '<h1 id="id_calculadora">Calculadora</h1>';
}
function eliminarElemento(id_elemento) {
    document.getElementById(id_elemento).remove();
}
function ocultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none';
}
function mostrarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'block';
}

/* =======================
   FUNCIONES DE CALCULADORA
======================= */
function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;

    // Validar entradas vacías o no numéricas
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos en ambos campos.");
        return;
    }

    if (tipo === '+') resultado = sumar(num1, num2);
    if (tipo === '-') resultado = restar(num1, num2);
    if (tipo === '*') resultado = multiplicar(num1, num2);
    if (tipo === '/') {
        if (num2 === 0) {
            alert("Error: División por cero no es permitida.");
            return;
        }
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = resultado;

    function limpiarResultados() {
        document.getElementById('id_resultado').innerText = '0';
        document.getElementById('id_n1').value = '';
        document.getElementById('id_n2').value = '';
    }

    /* =======================
   FUNCIONES MATEMÁTICAS
======================= */
    function sumar(a, b) {
        return a + b;
    }
    function restar(a, b) {
        return a - b;
    }
    function multiplicar(a, b) {
        return a * b;
    }
    function dividir(a, b) {
        return a / b;
    }

}

/* =======================
   FUNDAMENTOS JS
======================= */

// TIPOS DE VARIABLES
var nombre = "Jhonny Ninabanda" // Antigua y obsoleta
/*variables cambiantes: aplica el tipado dinamico-nose 
       necesita declara el tipo de dato, aun asi no es recomendable
       usar diferente tipos de variables en una sola*/
let apellido = "Ninabanda"
let apellido2 = "Pambabay"
apellido2 = 10; // reasignacion de valor
let arreglo = [1, 2, 3, 4, 5]; // arreglo
let semanaDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']; // arreglo de strings
const PI = 3.1416; // constante, valor inmutable

// Imprimir en la consola del navegador
console.log('fudamentosJS');
console.log(nombre);
console.log(PI);
console.log(semanaDias);

//Arreglos es comun definirlos con const lo mas correcto
const arreglosDiasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
arreglosDiasSemana.push('Sabado'); //agregar elemento
console.log(arreglosDiasSemana);
arreglosDiasSemana.unshift('Domingo'); // agregar al inicio
console.log(arreglosDiasSemana);
console.log(arreglosDiasSemana[0]); // acceder a un elemento
console.log('Manejo de nulos, undefined y vacios');
arreglosDiasSemana.push(null); // agregar nulo
arreglosDiasSemana.push(''); // agregar vacio
console.log(arreglosDiasSemana[5]); // acceder 

// Concatenación de cadenas 
const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [1, 3, 5, 7, 9];
const numerosTotales = numerosImpares.concat(numerosPares);
console.log(numerosTotales);

/* Sentencias de control */
// Estructura condicional if-else
let edad = 19;
if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// Estructura condicional switch
let dia = 'Lunes';
switch (dia) {
    case 'Lunes':
        console.log('Hoy es lunes');
        break;
    case 'Martes':
        console.log('Hoy es martes');
        break;
    default:
        console.log('No es lunes ni martes');
        break;
}

// Estructura de repetición for
for (let i = 0; i < 5; i++) {
    console.log('Iteración número: ' + i);
}

// for...of para recorrer arreglos
const frutas = ['Manzana', 'Papaya', 'Sandia', 'Naranja'];
for(let fruta of frutas){
    console.log('Fruta: ' + fruta);
}

/*Manejo de objetos */
// Se declara en formato JSON
const profesor = {
    nombre: 'Jhonny',
    apellido: 'Ninabanda',
    edad: 30,
    ecuatoriano: true,
    genero: 'M',
    ciudad: 'Quito'
};
console.log('Manejo de objetos');
console.log(profesor);
console.log('Nombre del profesor: ' + profesor.nombre);

// === Igualdad estricta y != Diferente estricto
if (profesor.ciudad === 'Quito') {
    console.log('El profesor es Quiteño');
}

if (profesor.edad !== 25) {
    console.log('El profesor no tiene 25 años');
}else {
    console.log('El profesor tiene 25 años');
}

// for...in para recorrer propiedades de un objeto
for(let clave in profesor){
    console.log(clave);
    console.log(profesor[clave]);
}
