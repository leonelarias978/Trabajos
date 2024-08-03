"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.question("Ingrese un numero: ");
if (numero == 0) {
    console.log("El numero ingresado es 0.");
}
else if (numero % 2 == 0) {
    console.log("Par");
}
else {
    console.log("Impar");
}
