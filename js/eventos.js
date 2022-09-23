var btnIniciarJuego = document.querySelector("#iniciar-juego");
var btnAleatoria = document.querySelector("#aleatoria");
var btnCerrarGanaste = document.querySelector("#cerrar-ganaste");
var btnCerrarPerdiste = document.querySelector("#cerrar-perdiste");
var btnAgregarPalabra = document.querySelector("#agregar-palabra");

/**
 * Las funciones contenidas dentro de este evento,
 * se ejecutan al cargar la página. 
 */
window.addEventListener("load", function () {
    //posicionarPuntero(campoAgregar);
   // limpiarCampo(campoAgregar);
    //limpiarCampo(campoLetraIngresada);
    palabraAleatoria = generarPalabraAleatoria(array);
});

btnIniciarJuego.addEventListener("click", function () {
    ocultarSeccionHeader();
    mostrarSeccionJuego();
    generarJuego();
    limpiarCampo(campoAgregar);
    intentos = 0;
});



btnAgregarPalabra.addEventListener("click", function () {
    var palabraNueva = campoAgregar.value;
    /**
     * Evalúo si la nueva palabra no está vacía
     */
    if (palabraNueva != "") {
        /***
         * Evalúo si la nueva palabra no existe en el arreglo global.
         */
        if (!array.includes(palabraNueva)) {
            array.push(palabraNueva);
            alert("Palabra ingresada exitosamente.");
            limpiarCampo(campoAgregar);
            posicionarPuntero(campoAgregar);
        } else {
            alert("Esta palabra ya existe en el juego, intente una nueva.");
            limpiarCampo(campoAgregar);
            posicionarPuntero(campoAgregar);
        }
    } else {
        alert("Por favor, escriba una palabra.");
        posicionarPuntero(campoAgregar);
    }
});

/**
 * Ambos ventos muestran un mensaje con un gif ocupando toda la página,
 * contiene:
 * @function generarJuego();
 * Para comenzar un juego nuevo al dar click sobre el botón Cerrar.
 */


