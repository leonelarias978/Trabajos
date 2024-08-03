import * as readlineSync from "readline-sync";
let base: number = readlineSync.question("Ingrese un base: ");
let exponente: number = readlineSync.question("Ingrese un exponente: ");

function name(base: number, exponente: number): number {
  if (exponente === 0) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
      resultado *= base;
    }
    return resultado

  }
}
function imprimiendo(resultadoFinal:number):void{
console.log(`\nResultado: ${resultadoFinal}`)  

}
let respuesta:number= name(base,exponente);
imprimiendo(respuesta);

