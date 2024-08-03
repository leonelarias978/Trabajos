"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.question("Ingrese un base: ");
var exponente = readlineSync.question("Ingrese un exponente: ");
function name(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    else {
        var resultado = 1;
        for (var i = 0; i < exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }
}
function imprimiendo(resultadoFinal) {
    console.log("\nResultado: ".concat(resultadoFinal));
}
var respuesta = name(base, exponente);
imprimiendo(respuesta);
