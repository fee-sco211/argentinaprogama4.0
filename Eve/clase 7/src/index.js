/** 
import http, { request } from 'http';
const PORT = null ?? 4000;//si no existe otro puerto nos devolvera el 4000
                        //datos que entran- datos que se devuelven
const server = http.createServer((request, Response)=>{
response.end("hola este es mi primer servidor en node")
})

//ejecutar servidor
server.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`)
})*/

import express from'express'

const app=express()//app es igual a la ejecucion express
const PORT=4000
app.get('/',(req,res)=>{
    res.send("estes es mi primir servidor")
})

app.listen(PORT,()=>{
    console.log(`server on port ${PORT}`)
})


const users=[
    {   nombre:"mara",
        apellido:"lele",
        id:1
    }
    {   nombre:"cami",
        apellido:"memee",
        id:2
    }
    {   nombre:"mica",
        apellido:"pepe",
        id:3
    }
]