/**********************************
 * Funcion de validación de claves
 ***********************************/

    function inicio() {
        document.getElementById("formulario").addEventListener('submit', validar, false);
    }

    function validar(evt) {
        let Clave1 = document.getElementById("clave1").value;
        let Clave2 = document.getElementById("clave2").value;
       
	if (   Clave1.value=='' )
	{
	alert("No se ha introducido la Clave");
	errorValidando(document.forms.formulario.Clave1);
	return false;
	}
else
	{

 	if ( Clave1.value != Clave2.value )
		{
		alert("Las claves deben coincidir");
		errorValidando(document.forms.formulario.Clave2);
		return false;
		}
 	else
		return true;
		}
	};


/**********************************
 * Funcion de validación de Nombre
 *********************************/

function validaNombre()
{
if (Nombre.value=='')
	{
	alert("Introduzca un Nombre");
	errorValidando(document.forms.formulario.Nombre);
	return false;
	}
else
	{
	
	if (Apellido1.value=='')
		{
		alert("Introduzca su primer Apellido");
		errorValidando(document.forms.formulario.Apellido1);
		return false;
		}
	else
		{
		if (Apellido2.value=='')
			{
			alert("Introduzca su segundo Apellido");
			errorValidando(document.forms.formulario.Apellido2);
			return false;
			}
		else
			{
			return true;
			}
		}
	}
}
/***********************************
 * Funcion de Cambio de Programación
 ***********************************/


/*********************************************
 *Funcion de recogida y presentación de datos
 *********************************************/
 
 class Formulario{
	 constructor(){
		
			this.oEvento = {}
			this.oName = document.querySelector("#fname"),
			this.oApell = document.querySelector("#apell"),
			this.oAddress = document.querySelector("#address"),
			this.oCity = document.querySelector("#city"),
			this.oComent = document.querySelector("#coment"),
			this.aJoomla = document.querySelectorAll("[name = pregunta]")
			this.oCond = document.querySelector("#condiciones"),
			this.oCond1 = document.querySelector("#condiciones_1"),
			this.oOpciones = document.querySelector("#opciones"),
			this.oParrafo = document.querySelector("#parrafo_1"), // referencia del párrafo donde escribir
			this.aSalida = []
			this.oName.focus();	
		}

		getTextos () {
			this.aSalida = [
				{etiqueta : "Nombre", valor : this.oName.value},
				{etiqueta : "Apellidos", valor : this.oApell.value},
				{etiqueta : "Dirección", valor : this.oAddress.value},
				{etiqueta : "Ciudad", valor : this.oCity.value},
				{etiqueta : "Comentarios", valor : this.oComent.value}
			]
		}; //Fin de la función getTextos 

		getRRadiobuttons () {				
			for(let i=0; i < this.aJoomla.length; i++) {
				if (this.aJoomla[i].checked) {
					this.aSalida[this.aSalida.length] = {
						etiqueta : "Preparado para dar Joomla!", valor : this.aJoomla[i].value.toUpperCase()}
				};
			};
		}; //Fin de la función getRRadiobuttons

		getCheckbox () {
			if (this.oCond.checked) {
				this.aSalida[this.aSalida.length] = {etiqueta : "Condiciones leidas!", valor : "SI"}
			} 
			else{
				this.aSalida[this.aSalida.length] =  {etiqueta : "Condiciones leidas!", valor : "NO"};		
			};	
			if (this.oCond1.checked) {
				this.aSalida[this.aSalida.length] = {etiqueta : "Condiciones leidas 2!", valor : "SI"}
			} 
			else{
				this.aSalida[this.aSalida.length] =  {etiqueta : "Condiciones leidas 2!", valor : "NO"}	
			};
		}; //Fin de la función getCheckbox

		getSelectOptions () {
			let oOpcion = this.oOpciones.options[this.oOpciones.selectedIndex];
			var textoSeleccionado = oOpcion.text; // Segundo valor
			var valorSeleccionado = oOpcion.value; // 2
			this.aSalida[this.aSalida.length] = {etiqueta : "Nivel de JavaScript", valor : textoSeleccionado} 
		}; //Fin de la función getSelectOptions


		recogeDatos (oE) {
			this.oEvento = oE;
			// Llamada a las funciones get de cada conjunto de controles
			this.getTextos();
			this.getRRadiobuttons();
			this.getCheckbox();
			this.getSelectOptions();
			//llamada a la función que procesara el array presentandolo en pantalla
			this.escribeDatos ();
		} // Fin de la funcion recogeDatos

		escribeDatos () {
			//anula el comportamiento por defecto de submit
			//incluida la validacion de los requireds
			//que ya se ha realizado para poder llegar aqui
			this.oEvento.preventDefault();
			//ocultar formulario
			document.querySelector("#form_1").className = "oculto";
			//mostrar bloque div para el resultado
			document.querySelector("#resultado").className = "bloque";
			//incorporamos al parrafo cada línea del array		
			for (var i = 0; i < this.aSalida.length; i++) {
				this.oParrafo.innerHTML 		  
					+= `<strong> ${this.aSalida[i].etiqueta} : </strong>
					${this.aSalida[i].valor}</br>
			`};
		} // Fin de la funcion escribeDatos
	} // Fin de la clase formulario

	
	document.addEventListener("DOMContentLoaded", function () {
			oFormulario = new Formulario
			document.querySelector("#submit").addEventListener("click", oFormulario.recogeDatos.bind(oFormulario))
		}, false);	

	 }
 }
         