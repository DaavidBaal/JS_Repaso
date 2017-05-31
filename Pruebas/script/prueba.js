/**********************************************************
Funciones "externas" invocadas desde el formulario en el proceso de validación
***********************************************************/
function validaDatos()
{
if( !validaCorreo() && !validaClave() && !validaNombre() && !validaFecha() )
	return false;
else
	return true;
//alert("Función validaDatos concluida");
}

function actualizarColor(Elemento)
{
//vuelve a cambiar los colores del elemento de error a los originales
with (window.document.forms.formulario)
	{
	Elemento.style.color='red';
	Elemento.style.backgroundColor='white';	
	}
}



class Formulario {
    constructor(){
        this.oCorreo = document.querySelector("#Correo"),
        this.oClave1 = document.querySelector("#Clave1"),
        this.oClave2 = document.querySelector("#Clave2"),
        this.oNombre = document.querySelector("Nombre"),
        this.oApellido1 = document.querySelector("Apellido1"),
        this.oApellido2 = document.querySelector("Apellido2")
        this.oCond = document.querySelector("#Música"),
		this.oCond1 = document.querySelector("#Viajes"),
        this.oCond2 = document.querySelector("#condiciones_2"),
		this.oCond3 = document.querySelector("#condiciones_3"),
        this.oParrafo = document.querySelector("#parrafo_1"), // referencia del párrafo donde escribir
		this.aSalida = []
		;	
		}

		getTextos () {
		this.aSalida = [
				{etiqueta : "Correo", valor : this.oCorreo.value},
				{etiqueta : "Clave1", valor : this.oClave1.value},
				{etiqueta : "Clave2", valor : this.oClave2.value},
				{etiqueta : "Nombre", valor : this.oNombre.value},
				{etiqueta : "Apellido1", valor : this.oApellido1.value},
                {etiqueta : "Apellido2", valor : this.oApellido2.value},
			]
		}; //Fin de la función getTexto
    
       // getRRadiobuttons () {				
		//	for(let i=0; i < this.aJoomla.length; i++) {
		//		if (this.aJoomla[i].checked) {
		//			this.aSalida[this.aSalida.length] = {
		//				etiqueta : "Preparado para dar Joomla!", valor : this.aJoomla[i].value.toUpperCase()}
		//		};
		//	};
//		}; //Fin de la función getRRadiobuttons

		getCheckbox () {
			if (this.oCond.checked) {
				this.aSalida[this.aSalida.length] = {etiqueta : "Música", valor : "SI"}
			} 
			else{
				this.aSalida[this.aSalida.length] =  {etiqueta : "", valor : ""};		
			};	
			if (this.oCond1.checked) {
				this.aSalida[this.aSalida.length] = {etiqueta : "Viajes", valor : ""}
			} 
			else{
				this.aSalida[this.aSalida.length] =  {etiqueta : "", valor : ""}	
			};
		}; //Fin de la función getCheckbox

		getSelectOptions () {
			let oOpcion = this.oOpciones.options[this.oOpciones.selectedIndex];
			var textoSeleccionado = oOpcion.text; // Segundo valor
			var valorSeleccionado = oOpcion.value; // 2
			this.aSalida[this.aSalida.length] = {etiqueta : "Nivel de JavaScript", valor : textoSeleccionado} 
		}; //Fin de la función getSelectOptions
    recogeDatos () {
			// Llamada a las funciones get de cada conjunto de controles
			this.getTextos();
			this.getRRadiobuttons();
			this.getCheckbox();
			this.getSelectOptions();
			//llamada a la función que procesara el arry presentandolo en pantalla
			this.escribeDatos ();
		} // Fin de la funcion recogeDatos

		escribeDatos () {
			//ocultar formulario
			document.querySelector("#formulario").className = "oculto";
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

	

        function main() {
            var oFormulario = {
                oEvento: {},
                oDatos: {},
                oLista: document.getElementById("listaDatos"), // referencia del párrafo donde escribir
                recogeDatos: function (oE) {
                    // manejadora del evento submit del formulario:
                    // disparada sólo despues de la validación HTML5
                    this.oEvento = oE || window.evnet;
                    var inputs = document.querySelectorAll("input[type='text']")
                    for (var i = 0; i < inputs.length; i++) {
                        this.oDatos[inputs[i].name] = inputs[i].value;
                    }
                    this.oDatos.Comentarios = document.getElementById("Comentarios").value;
                    this.escribeDatos();
                }, //Fin del método recogeDatos

                escribeDatos: function () {
                    //anula el comportamiento por defecto de submit
                    //incluida la validacion de los requireds
                    //que ya se ha realizado para poder llegar aqui
                    this.oEvento.preventDefault();
                    //ocultar formulario
                    document.getElementById("formulario").classList.add("oculto")
                    //mostrar bloque div para el resultado
                    document.getElementById("resultado").classList.remove("oculto");
                    // limpiar el nodo <ul> donde se presentarán los datos
                    this.oLista.innerHTML = "";
                    //incorporamos a la lista cada elemento del objeto		
                    for (var i in this.oDatos) {
                        this.oLista.innerHTML += "<li>" + i + ": <strong>" +
                            this.oDatos[i] + "</strong></li>";
                    };
                }, //Fin del método escribedatos	
            }; // Fin del objeto oFormulario
            
            //document.getElementById("submit").addEventListener("click",
            //   oFormulario.recogeDatos.bind(oFormulario));

            // En lugar de responder al evento click del boton enviar
            // Respondemos al evento submit del formulario, 
            // desencadenado por el boton pero POSTERIOR
            // al proceso de validación HTML

            document.getElementById('formulario').addEventListener("submit", oFormulario.recogeDatos.bind(oFormulario))


                
        } // Fin de la función main()