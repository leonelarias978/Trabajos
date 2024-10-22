"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaje = void 0;
class personaje {
    constructor(nombre, nivel = 1, puntosdevida = 100) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosdevida = puntosdevida;
    }
    atacar() {
        console.log(`${this.nombre} A realizado un ataque`);
    }
    defender() {
        console.log(`${this.nombre} Se ha defendido`);
    }
    Curar() {
        console.log(`${this.nombre} se ha curado con una manzana dorada`);
    }
}
exports.personaje = personaje;
