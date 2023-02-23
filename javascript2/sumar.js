
document.getElementById('suma').addEventListener('click',function(){
    
    let numeroA = document.getElementById('numero1').value;
    console.log("el valor del primer numero es: " + numeroA);
    let numeroB=document.getElementById('numero2').value;
    console.log("el valor del segundo numero es: " + numeroB);
    let resultado=sumar(parseInt(numeroA),parseInt(numeroB));
    console.log("el valor del resultado es: " + resultado);

    document.getElementById('resultado_final').innerHTML = resultado;

    document.getElementById('contenedorResultado').style.display = 'block';
})

function sumar(a,b){
    return a + b;
}