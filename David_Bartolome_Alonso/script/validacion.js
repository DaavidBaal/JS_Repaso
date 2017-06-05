function validar(val) {
    var msgs = "";
    if (!val) {
        msgs = "Las contraseñas no coinciden"
        contrasena.focus();
    } else {
        sacar[sacar.length] = { etiqueta: "Contraseña", valor: contrasena.value }
    }
}
/************************
 * Funcion validar claves
 ***********************/
function validaClave()
{

if (   Clave1.value=='' )
	{
	alert('No se ha introducido la Clave');
	errorValidando(document.forms.formulario.Clave1);
	return false;
	}
else
	{
 	if ( Clave1.value != Clave2.value )
		{
		alert('Las claves deben ser iguales;');
		errorValidando(document.forms.formulario.Clave2);
		return false;
		}
 	else
		{
		
		return true;
		}
	}
}

function asignaturas(Elemento)
{
//Elemento es una string con el nombre puesto que recibimos objeto.value
with (window.document.forms.formulario)
	{
	if(Elemento=='web')
		{
//Materias es un array y por tanto utilizamos la misma sintaxis  para manejarlo
		Materias[0].text='HTML';
		Materias[0].value=1;
		Materias[1].text="CSS";
		Materias[1].value=2;
		Materias[2].text='JavaScrip';
		Materias[2].value=3;
		Materias[3].text="PHP";
		Materias[3].value=4;
		Materias[4].text="PHP Avanzado";
		Materias[4].value=5;
		}	
	if(Elemento=='sistemas')
		{
		Materias[0].text='Shell Scripts';
		Materias[0].value=5;
		Materias[1].text="Linux C";
		Materias[1].value=6;
		Materias[2].text='MySQL';
		Materias[2].value=7;
		Materias[3].text="Servidores";
		Materias[3].value=8;
		}	
	if(Elemento=='objeto')
		{
		Materias[0].text='Lenguaje C';
		Materias[0].value=9;
		Materias[1].text="C++";
		Materias[1].value=10;
		Materias[2].text='Java';
		Materias[2].value=11;
		Materias[3].text="Basic";
		Materias[3].value=12;
		}	
	}
}
/********************************
 * Funcion presentar fecha actual
 ********************************/
function fechaActual(sLugar) {
	var aDias = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'S&aacute;bado');
	var aMeses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
//Creamos una nueva instancia del objeto Date del cual su valor es la fecha y hora actual
	var dFecha = new Date();
	var anio = dFecha.getYear() + 1900;
	var diaSem = dFecha.getDay();
	var diaMes = dFecha.getDate();
	var mes = dFecha.getMonth();
	return ('En ' + sLugar + ', el ' + aDias[diaSem] + ' día ' + diaMes + ' de ' + aMeses[mes] + ' del año ' + anio);
}

window.onload = function () {
			document.getElementById("objeto").onclick =  function () { 
  				asignaturas(this.value);};
  			document.getElementById("sistemas").onclick =  function () { 
  				asignaturas(this.value);};
  			document.getElementById("web").onclick =  function () { 
  				asignaturas(this.value);};
			document.getElementById("fechaHoy").innerHTML = fechaActual("Madrid");	
};

/**
 * Funcion para cpger Fecha
 */
function main () {	//envio de evento a la funcion manejadora.

			    function comprobacion_5(oEvent) {
			        oEvent.preventDefault();
			        domInputFecha = oEvent.currentTarget.children[0];
			        domRespuesta = document.getElementById("lista datos");
			        // reformateamos la fecha estilo "español"
			        var aFecha = domInputFecha.value.split('-').reverse();
			        var txtFullFecha = aFecha.join("/");
			        // guardaríamos com date para posible usus posteriores
			        var date = new Date(aFecha[2], aFecha[1] - 1, aFecha[0]); //año,mes,dia
			        muestraAcierto(txtFullFecha, date.getDay());
			    }

			  

			    function muestraAviso(n) {
			        var aMensajes = ["El formato de la fecha no es valido",
                    "La fecha no es valida"];
			        domInputFecha.classList.add("invalid");
			        domRespuesta.classList.add("emergente");
			        domRespuesta.innerHTML = aMensajes[n];
			        setTimeout(function () {
			            domRespuesta.classList.remove("emergente");
			            domRespuesta.innerHTML = ""
			        }, 2000)

			        return false;
			    }

			    function muestraAcierto(txtFecha, diaSemana) {
			        domRespuesta.innerHTML = 'El día ' + txtFecha + ' cae en ' + aDias[diaSemana];
			    }

			    var aDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
                // accesos al dom que variaran según se use la primera o la segunda parte del formulario
			    var domInputFecha, domRespuesta;

			    // manejador para el formulario al usar HTML5
			    document.getElementById('formulario').addEventListener("submit", comprobacion_5)
			    // manejador para el botos de HTML - clásico
                //  que no es de tipo submit
			    document.getElementById('btnSubmit').onclick = comprobacion;

			    domInputFecha = document.getElementById("Fecha").classList.add("invalid")
                    
			};

		