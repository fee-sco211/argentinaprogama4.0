

function sumar(...num){//operador rest => referencia a n cantidad de paramentros en un array
    return num.reduce((a,b) => a+b,0)
}


console.log(sumar(1,2,3,4,5,4,456,456454,45645645645,))