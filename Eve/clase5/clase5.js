/**forma sincro
 * 
 * import fs from 'fs'

fs.writeFileSync('./ejemplo.txt',"hola")

if(fs.existsSync('./ejemplo.txt')){
    //console.log("v")
    let contenido=fs.readFileSync('.ejemplo.txt','utf-8')//lectura de archivos
    console.log(contenido)
    fs.appendFileSync('.eve/clase5/ejemplo.txt',"\n buenas noches")//salto de linea(reemplazado con las backtips)
    contenido=fs.readFileSync('.ejemplo.txt','utf-8')//lectura de archivos
    console.log(contenido)
    fs.unlinkSync('./ejemplo.txt')//elimina el archivo
}
*/


/**Fs.writeFile'./ejemplo.txt','hola',(error)=>{
    if(error){
        return console.log("error en escritura")
    }
    fs.writeFile'./ejemplo.txt','utf-8',(error, resultado)=>{
        if(error){
            return console.log("error en lectura")
        }
        console.log(resultado)

        fs.appenFile'./ejemplo.txt','buenas noches',(error)=>{
            if(error){
                return console.log("error en append")
            }
            fs.writeFileif'./ejemplo.txt','utf-8',(error,resultado)=>{
                if(error){
                    return console.log("error en lectura2")
                }
            }fs.writeFileif'./ejemplo.txt',(error,resultado)=>{
            if(error){
                return console.log("error en lectura2")
            }
            }
    }
}*/
const fs = require('fs')

const consultasTXT=async(ruta)=>{
    await fs.promises.writeFile(ruta,"hola")
}

consultasTXT('.ejemplo.txt')