/** 
console.log("hola mundo");

let num1 = 3;
let num2 = 4;

let resultado = num1+num2;

console.log("La suna entre num1 y num2 es: " + resultado);





/**
document.getElementById("boton").onclick = function (){
    console.log("Capturamos el elemento click")//recibe que te acciono el boton
    document.getElementById("demo1").innerHTML="estamos probando nuestro Html tocando el boton";//devuelve al html una respuesta a ejecutar
}



document.addEventListener('click', function(){
    console.log("Hola mundo desde Eventlistener")
    document.getElementById("demo2").innerHTML="estamos probando nuestro Html tocando la pantalla";
});
*/

document.getElementById("boton").addEventListener('click', function(){//añade un escuchador de eventos('el evento a escuchar', funcion a ejecutar)
    console.log("Hola mundo desde Eventlistener")
    document.getElementById("demo2").innerHTML="estamos probando nuestro Html tocando la pantalla";
});




document.getElementById("boton_color").addEventListener('click', function(){//cambiar color de fondo
    document.body.style.backgroundColor = '#ff0000';
});


document.getElementById("boton_color_default").addEventListener('click', function(){
    console.log("Hola mundo desde Eventlistener")
    document.body.style.backgroundColor = '#FFFFFF';
});

document.getElementById("boton_ocultar").addEventListener('click', function(){
    document.getElementById("demo1").style.display='none';

});


const myCollection = document.getElementsByClassName('ejemplo');
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "black";
}