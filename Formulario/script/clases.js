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
 /
            Function.prototype.bind = function () {
                var fn = this, args = Array.prototype.slice.call(arguments),
                    object = args.shift();
                return function () {
                    return fn.apply(object,
                      args.concat(Array.prototype.slice.call(arguments)));
                };
            };
        }
		
	function main() {
            let oFormulario = {
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

            document.getElementById('formulario').addEventListener("submit",oFormulario.recogeDatos.bind(oFormulario))


                
        } // Fin de la función main()

	    document.addEventListener("DOMContentLoaded", main, false);
	