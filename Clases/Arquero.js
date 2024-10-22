"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const personaje_1 = require("./personaje");
class Arquero extends personaje_1.personaje {
    constructor(nombre) {
        super(nombre);
    }
    disparar() {
        console.log(`${this.nombre} Disparo una flecha`);
    }
    Esquivar() {
        console.log(`${this.nombre} Esquivo el ataque`);
    }
}
exports.Arquero = Arquero;
