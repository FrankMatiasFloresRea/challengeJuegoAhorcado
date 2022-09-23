

var campoAgregar = document.querySelector("#nueva-palabra");


var campoLetraIngresada = document.querySelector("#letra-ingresada");

var filtro = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";


campoAgregar.addEventListener("input", function () {
        var textoMayusculas = "";
        var palabraIngresada = "";
        var valorCampo = this.value;

        for (var i = 0; i < valorCampo.length; i++) {
            for (var j = 0; j < filtro.length; j++) {
                if (filtro[j] == valorCampo[i]) {
                    palabraIngresada += valorCampo[i];

                }
            }
        }
        
    
    if (palabraIngresada.length <= 23) {
        textoMayusculas = palabraIngresada.toUpperCase();
        this.value = textoMayusculas;
    } else {
        alert("Límite de carácteres excedido.");
        this.value = this.value.slice(0, 23);
    }
});


campoLetraIngresada.addEventListener("input", function () {
    var textoMayusculas = "";
    var textoValidado = "";
    var valorCampo = this.value;

    for (var j = 0; j < filtro.length; j++) {
        if (filtro[j] == valorCampo) {
            textoValidado += valorCampo;
        }
    }

    textoMayusculas = textoValidado.toUpperCase();
    this.value = textoMayusculas;

    if (textoMayusculas != "") {
        setTimeout(function () {
            dibujarLetraAcertada(textoMayusculas, palabraAleatoriaActual);
            limpiarCampo(campoLetraIngresada);
        }, 300);
    }
});
function posicionarPuntero(campo) {
    return campo.focus();
}


function limpiarCampo(campo) {
    campo.value = " ";

    return campo;
}