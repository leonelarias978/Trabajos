//Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
//Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
//Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
//si el numero es par o impar

const array:number[]= [4,7,9,3,1,45,67,23,29,78,11,16]

let grandote:number

function encontrarNumMasGrande(array:number[]):number{
    let mayor=array[0]
    for (let i=1 ; i<array.length; i++){
        if(array[i]>mayor){
            mayor=array[i]
        } 

    }
    return mayor;
}


function parOImpar(number:number):string{
    if(number%2===0){
        return "es par"
    }
    else{
        return "es impar"
    }
}

grandote=encontrarNumMasGrande(array)
console.log(grandote)
const final=parOImpar(grandote)
console.log(final)

