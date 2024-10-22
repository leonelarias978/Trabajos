import { Arquero } from "./Arquero";

import { Luchador } from "./Luchador";

import { Mago } from "./Mago";

const mago=new Mago("voldemor")
mago.lanzar() 
mago.Desvio()
mago.Curar()

const luchador=new Luchador("Hercules")
luchador.Golpear() 
luchador.cubrir()
luchador.defender()

const arquero=new Arquero("Hercules")
arquero.disparar() 
arquero.Esquivar()
arquero.atacar()
