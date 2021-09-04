"use strict";
(function() {
    let btnExtraer = document.getElementById("boton-extraer");
    btnExtraer.onclick = extraer;

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
})();