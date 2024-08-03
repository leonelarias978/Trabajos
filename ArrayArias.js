//Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
//Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
//Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
//si el numero es par o impar
var array = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var grandote;
function encontrarNumMasGrande(array) {
    var mayor = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}
function parOImpar(number) {
    if (number % 2 === 0) {
        return "es par";
    }
    else {
        return "es impar";
    }
}
grandote = encontrarNumMasGrande(array);
console.log(grandote);
var final = parOImpar(grandote);
console.log(final);
