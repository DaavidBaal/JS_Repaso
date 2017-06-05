
class Formulario {

    constructor () {
        this.oDatos = { "Correo": "",
                        "Clave1": "",
                        "Clave2": "",
                        "Curso": "",
                        "Nombre": "",
                        "Apellido1": "",
                        "Apellido2" : "",
                        "Fecha" : "",
                        "Aficiones" : ""
       
            };
        this.aCBox = document.querySelectorAll("[name = aficion]"),
        this.oOpciones = document.querySelector("#opciones"),
        this.aSalida = []
        this.oParrafo = document.querySelector("#listaDatos");
        // referencia del párrafo donde escribir
        this.oBtnEnviar = document.querySelector("#btnSubmit")
        this.oForm = document.querySelector("#formulario")

        this.oBtnEnviar.addEventListener("click",
            this.recogeDatos.bind(this));

        this.oForm.addEventListener("submit", 
            this.simularEnviar.bind(this));

    }

    simularEnviar (oE) {
        alert("Iniciandosubmit");
        //anula el comportamiento por defecto de submit
        oE.preventDefault();
        //llamada a la función que procesara el objeto presentandolo en pantalla
        this.escribeDatos();
    }
 
    
    chBox() {
        let aficiones = ""
        for (let i = 0; i < this.aCBox.length; i++) {
            if (this.aCBox[i].checked) {
                aficiones = aficiones + " " + this.aCBox[i].value + " ,";
            }
        }
        this.fSalida[this.fSalida.length] = { etiqueta: "Aficiones", valor: aficiones.slice(0, -1) }
    }

    doIt(the_value) {

        switch (the_value) {
            case "web":
                this.cargarSelect(this.domSubCurso, this.cCurso.web)
                this.valCurso = this.rButt[0].nextSibling.data;
                this.domSubCurso.className = "bloque";
                break;

            case "sistemas":
                this.cargarSelect(this.domSubCurso, this.cCurso.sist)
                this.valCurso = this.rButt[1].nextSibling.data;
                this.domSubCurso.className = "bloque";
                break;

            case "objetos":
                this.cargarSelect(this.domSubCurso, this.cCurso.obj)
                this.valCurso = this.rButt[2].nextSibling.data;
                this.domSubCurso.className = "bloque";



        }
    }

    escribeSelect() {

        let sOpt = this.domSubCurso.options[this.domSubCurso.selectedIndex];
        let txtSelecionado = sOpt.text;
        this.fSalida[this.fSalida.length] = { etiqueta: this.valCurso, valor: txtSelecionado }
    }

    cargarSelect(oDom, aDatos) {
        oDom.innerHTML = "";
        for (var i = 0; i < aDatos.length; i++) {
            oDom.innerHTML += "<option>" + aDatos[i] + "</option>";
        }
    }

  getSelectOptions () {
			let oOpcion = this.oOpciones.options[this.oOpciones.selectedIndex];
			var textoSeleccionado = oOpcion.text; 
			var valorSeleccionado = oOpcion.value; 
			this.aSalida[this.aSalida.length] = {etiqueta : "Curso", valor : textoSeleccionado} 
		}; //Fin de la función getSelectOptions

    recogeDatos (oE) {
        this.oDatos.Correo = document.querySelector("#Correo").value;
        this.oDatos.Clave1 = document.querySelector("#Clave1").value;
        this.oDatos.Clave2 = document.querySelector("#Clave2").value;        
        this.oDatos.Nombre = document.querySelector("#Nombre").value;
        this.oDatos.Apellido1 = document.querySelector("#Apellido1").value;
        this.oDatos.Apellido2 = document.querySelector("#Apellido2").value;
        this.oDatos.Curso = document.querySelector("#Curso").value;
        this.oDatos.Fecha = document.querySelector("#Fecha").value;
        this.oDatos.Aficones = document.querySelector("#Aficiones").value;
    } //Fin del método recogeDatos


    escribeDatos () {
        //ocultar formulario
        document.querySelector("#formulario").classList.toggle("oculto")
        //mostrar bloque div para el resultado
        document.querySelector("#resultado").classList.toggle("oculto");
        //incorporamos a la lista cada elemento del objeto		
        for (var i in this.oDatos) {
            this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                this.oDatos[i] + "</strong></li>";
        };
    } //Fin del método escribedatos	

} // Fin de la clase Formulario
