

class Formulario {

        constructor () 
            this.oDatos = {"Nombre": "",
                        "Apellidos": "",
                        "Dirección": "",
                        "Ciudad": "",
                        "Comentarios": "",
                };
            this.oParrafo = document.getElementById("listaDatos");
            // referencia del párrafo donde escribir

            document.getElementById("submit").addEventListener("click",
                this.recogeDatos.bind(this));
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


        }

        recogeDatos (oE) {
            this.oDatos.Nombre = document.getElementById("fname").value;
            this.oDatos.Apellidos = document.getElementById("apell").value;
            this.oDatos.Dirección = document.getElementById("address").value;
            this.oDatos.Ciudad = document.getElementById("city").value;
            this.oDatos.Comentarios = document.getElementById("coment").value;
            //llamada a la función que procesara el objeto presentandolo en pantalla
            this.escribeDatos();
            oE.preventDefault();
            //anula el comportamiento por defecto de submit
        } //Fin del método recogeDatos


        escribeDatos () {
            //ocultar formulario
            document.getElementById("formulario").classList.toggle("oculto")
            //mostrar bloque div para el resultado
            document.getElementById("resultado").classList.toggle("oculto");
            //incorporamos a la lista cada elemento del objeto		
            for (var i in this.oDatos) {
                this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                    this.oDatos[i] + "</strong></li>";
            };
        } //Fin del método escribedatos	

    } // Fin de la clase Formulario

    class App {

        static main () {
          
            document.addEventListener("DOMContentLoaded", 
            function () {
                new Formulario()
            }, false);
        }

    } // Fin de la clase App


    App.main()
