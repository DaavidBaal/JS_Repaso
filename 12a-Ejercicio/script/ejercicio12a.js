 
 class Formulario{
     constructor(){
         this.oDOM = {
            eFrase : document.querySelector("#sFrase"),
            ebtnComprobar : document.querySelector("#btnComprobar"),
            eRespusta : document.querySelector("#sRespusta"),
        }; //fin dek ibjeto oDOM

        console.dir(this.oDOM);     
}
/**
 * @method controller
 */
controller(){
    this.ebtnComprobar.addEventListener("click", this.actualizarvista.bind(this))
}
/**
 *@method actualizarvista
 * @param {*object} oEvent 
 * @return void
 */
actualizarvista(oEvent){

 let aMensajes = [
        "MEzcla de mayusculas y minusculas",
        "Todo en minusculas",
        " Todo mayusculas",
      
    ]

    this.comprobarFrase()

    this.eRespusta.innerHTML=`
    <mark>
    ${aMensajes[this.comprobarFrase()]}
    </mark>`

}
 
/**
 * @method comprobarFrase
 * @param string
 * @return number
 * 
 * 0 => MEzcla de mayusculas y minusculas
 * 1 =>Todo en minusculas
 * 2 => Todo mayusculas
 */
 comprobarFrase(){
     let sFrase = this.oDOM.eFrase.value
     let nResponse = 0
     if(sFrase == sFrase.toLowerCase()){
         nResponse = 1
         //Todo minusculas
     }else if (this.oDOM.eFrase.value == this.oDOM.eFrase.value.toUpperCase()) {
         //Todo mayúsculas
         nResponse = 2
     }else{
         //Mezcla de Mayusculas  y minusculas

     }
  return nResponse;
        }
 }   