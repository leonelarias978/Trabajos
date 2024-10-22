"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const personaje_1 = require("./personaje");
class Mago extends personaje_1.personaje {
    constructor(nombre) {
        super(nombre);
    }
    lanzar() {
        console.log(`${this.nombre} lanzo una bola de fuego`);
    }
    Desvio() {
        console.log(`${this.nombre} desvio el ataque`);
    }
}
exports.Mago = Mago;
