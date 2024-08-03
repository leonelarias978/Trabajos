import * as readlineSync from'readline-sync';
    let numero:number = readlineSync.question("Ingrese un numero: ");


    if(numero == 0){
        console.log("El numero ingresado es 0.")

    }else if(numero % 2 == 0){
            console.log("Par")
        }else{
            console.log("Impar")
    }