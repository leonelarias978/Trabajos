"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arquero_1 = require("./Arquero");
const Luchador_1 = require("./Luchador");
const Mago_1 = require("./Mago");
const mago = new Mago_1.Mago("voldemor");
mago.lanzar();
mago.Desvio();
mago.Curar();
const luchador = new Luchador_1.Luchador("Hercules");
luchador.Golpear();
luchador.cubrir();
luchador.defender();
const arquero = new Arquero_1.Arquero("Hercules");
arquero.disparar();
arquero.Esquivar();
arquero.atacar();
