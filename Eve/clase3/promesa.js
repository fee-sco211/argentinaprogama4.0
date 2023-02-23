const consultarBDD =()=>{//en caso de asincronismo
    return new Promise((resolve,reject)=>{
    if(confirmacion){
        resolve("bese de datos de cliente")//Return implicito
    }
    reject("acceso denegado")
})
}

console.log(consultarBDD(flase))

.then(resultado => console.log(resultado))//cuando termina hace esto
//.catch(error =>)//en caso de error hace esto

