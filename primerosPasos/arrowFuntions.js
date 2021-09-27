const acceso = true
/*const accesoU = function(a){
 return a
}*/

//Para retornar solo un valor
const accesoU = a => a

accesoU(acceso) == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")
// No pasamos parametros a nuestra funcion y retornamos un valor
const accesoU = () => false
