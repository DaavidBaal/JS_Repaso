//* Función para el envio de datos y presentación de los datos en una nueva ventana
class Formulario {
		constructor () {
		this.aFormulario = document.querySelector("#formulario"),
			this.oAddres = document.querySelector("#Correo"),
			this.oClave1 = document.querySelector("#Clave1"),
			this.oClave2 = document.querySelector("#Clave2"),
			this.oName = document.querySelector("#Nombre"),
			this.oApell1 = document.querySelector("#Apellido1"),
			this.oApell2 = document.querySelector("#Apellido2"),
			this.aCurso.document.querySelectorAll("[name = Curso]"),
			this.aFiccion = document.querySelectorAll("[name = aficion]"),
			this.oParrafo = document.querySelector("#parrafo_1"), // referencia del párrafo donde escribir
			this.aSalida = [],
			


			

}
//Inicio de la Función getTextos
 
			getTextos() {
				this.aSalida = [
					{ etiqueta: "Correo", valor: this.oAddres.value },
					{ etiqueta: "Clave1", valor: this.oClave1.value },
					{ etiqueta: "Clave2", valor: this.oClave2.value },
					{ etiqueta: "Nombre", valor: this.oName.value },
					{ etiqueta: "Apellido1", valor: this.oApell1.value },
					{ etiqueta: "Apellido2", valor: this.oApell2.value },


				]
			};
			
//Fin de la función getTextos

/**
 * Funcion de Fecha actual
 */

fechaactual() {
        let hoy = new Date();
        let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        document.getElementById("fsFecha").innerHTML = "Hoy es " + " " + dias[hoy.getDay()] + " " + "dia" + " " + hoy.getDate() + " " + "de" + " " + meses[hoy.getMonth()] + " " + "del año" + " " + hoy.getFullYear();
    }
/**
 * Funcion sacar aficiones
 */
aFiccion() {
        let aficiones = ""
        for (let i = 0; i < this.aFiccion.length; i++) {
            if (this.aCBox[i].checked) {
                aficones = aficiones + " " + this.aCBox[i].value + " ,";
            }

        }
        this.aSalida[this.aSalida.length] = { etiqueta: "Aficiones", valor: aficiones.slice(0, -1) }

    }
//Fin funcion aficiones
/**
 * Inicio Funcion select
 */
	cargarSelect(oDom, aDatos) {
        oDom.innerHTML = "";
        for (var i = 0; i < aDatos.length; i++) {
            oDom.innerHTML += "<option>" + aDatos[i] + "</option>";
        }
    }
    escribeSelect() {
        var domSelect = oE.currentTarget;
        if (domSelect.childElementCount > 4) {
            domSelect.removeChild(domSelect.children[0]);
        }
        var nSelect = this.sSelect.options[this.sSelect.selectedIndex];
        var domOption = domSelect.options[nSelect]
        this.sSelect = domOption.text;
	};


//Fin funcion selec	
/**
 * Funcion de recogida de datos
 */
		recogeDatos () {

		
// Llamada a las funciones get de cada conjunto de controles
			this.getTextos();
			this.fechaactual();
			this.chbox();
			this.escribeDatos ();
		};

// Fin de la funcion recogeDatos

		escribeDatos () {
	console.log(escribeDatos)
//ocultar formulario
			document.querySelector("#encuesta").className = "oculto";
//mostrar bloque div para el resultado
			document.querySelector("#respuesta").className = "bloque";
//incorporamos al parrafo cada línea del array		
			for (var i = 0; i < this.aSalida.length; i++) {
				this.oParrafo.innerHTML += `<li> ${this.aSalida[i].etiqueta} : </strong> ${this.aSalida[i].valor}</li>
			`};
		} // Fin de la funcion escribeDatos
	} // Fin de la clase formulario

	
	document.addEventListener("DOMContentLoaded", function () {
			oFormulario = new Formulario;
  document.getElementById("submit").onclick = oFormulario.recogeDatos.bind(oFormulario);
		}, false);		
/**
 * *****************************************************************************************************
 */




