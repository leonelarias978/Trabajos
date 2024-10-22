"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
const personaje_1 = require("./personaje");
class Luchador extends personaje_1.personaje {
    constructor(nombre) {
        super(nombre);
    }
    Golpear() {
        console.log(`${this.nombre} lanzo un golpe`);
    }
    cubrir() {
        console.log(`${this.nombre} cubrio el ataque`);
    }
}
exports.Luchador = Luchador;
