"use strict";
(function() {
    let btnExtraer = document.getElementById("boton-extraer");
    btnExtraer.onclick = extraer;

    let btnColorear = document.getElementById("boton-colorear");
    btnColorear.onclick = colorear;

    function extraer() {
        let nombre = document.getElementById("nombre-apellido").value.trim();
        let fecha = new Date(document.getElementById("fechaNacimiento").value);
        let anioNacimiento = fecha.getFullYear();
        let eedad = 2021 - anioNacimiento;
        let mesLetra = fecha.toDateString().substring(4, 7);

        if (nombre && eedad >= 0) {
            let arrayNombre = nombre.split(" ");
            if (arrayNombre.length >= 3) {
                let aPaterno = arrayNombre[0];
                let longitudApellido = arrayNombre[0].length;
                let aMaterno = arrayNombre[1];
                let name = "";
                if (arrayNombre.length == 3) {
                    name = arrayNombre[2];
                } else if (arrayNombre.length > 3) {
                    for (let i = 2; i < arrayNombre.length; i++) {
                        name = name + " " + arrayNombre[i];
                    }
                }
                document.getElementById("apPaterno").value = aPaterno;
                document.getElementById("apMaterno").value = aMaterno;
                document.getElementById("nombres").value = name;
                document.getElementById("longitudApe").value = longitudApellido;
                document.getElementById("edad").value = eedad + " años";
                document.getElementById("nombreMes").value = mesLetra;
            } else {
                alert("Porfavor: colocar nombres y apellidos completos!!!")
            }

        } else {
            document.getElementById("apPaterno").value = "";
            alert("Campo apellidos y nombres, campo fecha de nacimiento. Son abligatorios!!!");
        }
    }
    let c = 0;

    function colorear() {
        if (c == 0) {
            let colorAzul = document.getElementsByClassName("fondo-azul");
            let colorAnaranjado = document.getElementsByClassName("fondo-anaranjado");

            while (colorAzul.length != 0) {
                document.getElementsByClassName("fondo-azul")[0].className = "fondo-anaranjado-nuevo";

            }
            while (colorAnaranjado.length != 0) {
                document.getElementsByClassName("fondo-anaranjado")[0].className = "fondo-azul-nuevo";
            }
            c = 1;
        } else {
            let colorAzul = document.getElementsByClassName("fondo-azul-nuevo");
            let colorAnaranjado = document.getElementsByClassName("fondo-anaranjado-nuevo");
            while (colorAzul.length != 0) {
                document.getElementsByClassName("fondo-azul-nuevo")[0].className = "fondo-anaranjado";
            }
            while (colorAnaranjado.length != 0) {
                document.getElementsByClassName("fondo-anaranjado-nuevo")[0].className = "fondo-azul";
            }
            c = 0;
        }
    }
})();