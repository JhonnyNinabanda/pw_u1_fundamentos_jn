function guardar() {
    limpiarMensajes();
    validarCampo();
}

function validarCampo() {

    let nombre = document.getElementById("id_name").value;
    let card = document.getElementById("id_number").value;
    let date = document.getElementById("id_date").value;
    let cvv = document.getElementById("id_cvv").value;

    // Validar nombre
    if (nombre.trim() === "") {
        mostrarMensaje('Nombre necesario');
        mostrarAsterisco('id_error_nombre');
        return;
    }

    // Validar tarjeta (16 dígitos)
    if (card.length !== 16) {
        mostrarMensaje('Número de tarjeta inválido');
        mostrarAsterisco('id_error_carrd');
        return;
    }

    // Validar fecha
    let regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regexFecha.test(date)) {
        mostrarMensaje('Fecha inválida (MM/YY)');
        mostrarAsterisco('id_error_date');
        return;
    }

    // Validar CVV (3 dígitos)
    if (cvv.length !== 3) {
        mostrarMensaje('CVV inválido');
        mostrarAsterisco('id_error_cvv');
        return;
    }

    // Si todo está OK
    mostrarMensaje("Datos correctos ✔");
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}

function limpiarMensajes() {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const errores = document.querySelectorAll('.error_asterisco');
    errores.forEach(e => e.innerText = '');
}
