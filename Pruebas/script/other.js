function validaNombre() {
// fallback para validación del nombre (sólo en ausencia de HTML5)
            var oNodo = document.getElementById("Nombre") ;
            if (oNodo.value.length == 0) {
                oNodo.nextSibling.nextSibling.innerHTML = "Debe completar el Nombre";
                oNodo.focus();
                return false;
            }
            else {
                oNodo.nextSibling.nextSibling.innerHTML = "";
                return true;
            }
        }

        function validaApellidos() {
// fallback para validación del apellido (sólo en ausencia de HTML5)
            var oNodo = document.getElementById("Apellido1");
            if (!oNodo.value.match(/^[A-ZÑ]+([A-ZÑa-zñ_]+)$/)) {
                oNodo.nextSibling.nextSibling.innerHTML = "Apellido incorrecto"
                oNodo.focus();
                return false;
            }
            else {
                oNodo.nextSibling.nextSibling.innerHTML = " ";
                return true;
            }
        } 
        var oNodo = document.getElementById("Apellido2");
            if (!oNodo.value.match(/^[A-ZÑ]+([A-ZÑa-zñ_]+)$/)) {
                oNodo.nextSibling.nextSibling.innerHTML = "Apellido incorrecto"
                oNodo.focus();
                return false;
            }
            else {
                oNodo.nextSibling.nextSibling.innerHTML = " ";
                return true;
            }
        }

        function validaCorreo() {
// fallback para validación del correo (sólo en ausencia de HTML5)
            var oNodo = document.getElementById("Correo");
            if (// document.getElementById("correo").value.length ==  0 ||
                !oNodo.value.match(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/)) {
                oNodo.nextSibling.nextSibling.innerHTML = "Debe completar el Correo";
                oNodo.focus();
                return false;
            }
            else {
                oNodo.nextSibling.nextSibling.innerHTML = " ";
                return true;
            }
        }

        function validaPassw() {
            oNodo1 = document.getElementById("Clave1")
            oNodo2 = document.getElementById("Clave2")

            if (Modernizr.input.required) {
// funcion manejadorea del evento oninput de Clave2 (sólo con HTML5)
                var msg = "";			        
                if (oNodo1.value != oNodo2.value) {
                    msg = "Las contraseñas no coinciden" 
                }
                oNodo2.setCustomValidity(msg)
                return;
            }
// fallback para validación de las contraseñas (sólo en ausencia de HTML5)
            if (oNodo1.value != oNodo2.value ||
                !oNodo1.value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
                oNodo1.nextSibling.nextSibling.innerHTML = "Debe introducir una clave correcta";
                oNodo1.focus();
                return false;
            }
            else {
                oNodo1.nextSibling.nextSibling.innerHTML = " ";
                return true;
            }
        }

        function validaCheck1() {
            // fallback para validación del nombre (sólo en ausencia de HTML5)
            oNodo = document.getElementById("Curso");
            if (!oNodo.checked) { // checkBox no seleccionado
                oNodo.nextSibling.nextSibling.innerHTML = "Debe selecionar uno";
                oNodo.focus();
                return false;
            }
            else {
                oNodo.nextSibling.nextSibling.innerHTML = " ";
                return true;
            }
        }

        function escribeDatos(oDatos) {
            var oLista = document.getElementById("listaDatos"); // referencia del párrafo donde escribir

            if (Modernizr.input.required) {
                // sólo en HTML5
                //ocultar formulario (incompatible con IE8)
                document.getElementById("formulario").classList.add("oculto")
                //mostrar bloque div para el resultado (incompatible con IE8)
                document.getElementById("resultado").classList.remove("oculto");
                // limpiar el nodo <ul> donde se presentarán los datos
                oLista.innerHTML = "";
                //incorporamos a la lista cada elemento del objeto ()error de ejecucion en IE8		
                for (var i in oDatos) {
                    var x = "<li>" + i + ": <strong>" +
                        oDatos[i] + "</strong></li>";
                    oLista.innerHTML += x;
                };
            } else {
                // fallback para validación del nombre (sólo en ausencia de HTML5)
                document.getElementById("resultado").className = "";
                oLista.innerHTML = "";
                //incorporamos a la lista cada elemento del objeto		
                for (var i in oDatos) {

                    // Crear nodo de tipo li
                    var item = document.createElement("li");
                    // Crear nodo de tipo Text
                    var contenido = document.createTextNode(i + ": " + oDatos[i]);
                    // Añadir el nodo Text como hijo del nodo Element
                    item.appendChild(contenido);
                    // Añadir el nodo Element como hijo de la pagina
                    oLista.appendChild(item);
                };
            }
            return false;
        }

        function recogeDatos(oEvent) {
            if (!Modernizr.input.required) {
                // Solo si NO estamos el HTML5 
                // se realizan las validaciones "fallback"
                if (!validaNombre() || !validaApellidos() || !validaCorreo() || !validaPassw() || !validaCheck1()) {
                    return false;
                }
            } else {
                oEvent.preventDefault();
            }
            
 // Si las validaciones son correctas se continua la lectura de los datos
            var oDatos = {};
            var inputs = document.querySelectorAll("input[type='text']")
            for (var i = 0; i < inputs.length; i++) {
                oDatos[inputs[i].name] = inputs[i].value;
            }
            oDatos.Comentarios = document.getElementById("Comentarios").value;
            oDatos.Correo = document.getElementById("Correo").value;
            oDatos.Clave = document.getElementById("Clave1").value;
            //radiobuttons
            var aJoomla = document.getElementsByName("pregunta");
            oDatos["Preparado para dar Joomla!"] = "";
            for (var i = 0; i < aJoomla.length; i++) {
                if (aJoomla[i].checked) {
                    oDatos["Preparado para dar Joomla!"] = aJoomla[i].value.toUpperCase();
                }
            }
            //checkbox
            oDatos["Condiciones leidas"] = (document.getElementById("condiciones").checked) ? "SI" : "NO";
            //select options
            var nSelect = document.getElementById("opciones").selectedIndex;
            var sOpcion = document.getElementById("opciones").options[nSelect];
            oDatos["Nivel de JavaScript"] = sOpcion.text;
            //llamada a la función que procesara el arry presentandolo en pantalla
            return escribeDatos(oDatos);

        }


        function main() {
            document.getElementById("Nombre").focus();
            if (Modernizr.input.required) {
                // en modo HTML%
                document.getElementById('formulario').addEventListener("submit", recogeDatos)
                document.getElementById("Clave2").oninput = validaPassw
            } else {
                // en modo no HTML5 se activa la comprobación cada vez que se utiliza un control del formulario
                document.getElementById("submit").onclick = recogeDatos;
               // document.getElementById("Correo").onblur = validaCorreo;
               //document.getElementById("Clave2").onblur = validaPassw
               //document.getElementById("Nombre").onblur = validaNombre;
               //document.getElementById("Apellidos").onblur = validaApellidos;
            }            
        }

        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", main, false);
            //metodo de DOM nivel 2  que indica al agente de usuario que permanezca atento:
            // evento: en este caso la carga completa de la página
            // función a lanzar: en este caso iniciaBoton
            // orden del flujo de eventos: false salta la fase de captura
        } else {
            window.onload = main;
        }
