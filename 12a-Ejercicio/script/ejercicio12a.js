function info(cadena) {
 
  var resultado = "La cadena" + cadena + "" ;
 
  // Comprobar mayúsculas y minúsculas
  if(cadena == cadena.toUpperCase()) {
    resultado += " está formada sólo por mayúsculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += " está formada sólo por minúsculas";
  }
  else {
    resultado += " está formada por mayúsculas y minúsculas";
  }
 
  return resultado;
}
 
//Recogida de Datos y presentación en pantalla
 
 class Formulario {
            constructor() {
                this.oDatos = {
                    "Cadena" : "";
                };
                this.oParrafo = document.getElementById("listaDatos");
                // referencia del párrafo donde escribir
                document.getElementById("submit").addEventListener("click",
                    this.recogeDatos.bind(this));
            }
            recogeDatos(oE) {
                this.oDatos.Cadena = document.getElementById("Cadena").value;
                //llamada a la función que procesara el objeto presentandolo en pantalla
                this.escribeDatos();
                oE.preventDefault();
                //Quita el comportamiento al boton submit

            } //Fin del método recogeDatos
            escribeDatos() {
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
 