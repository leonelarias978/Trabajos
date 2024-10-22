import { personaje } from "./personaje";

export class Luchador extends personaje {
    constructor(nombre:string){
        super(nombre);
}

Golpear():void {
    console.log(`${this.nombre} lanzo un golpe`)
}
cubrir():void {
    console.log(`${this.nombre} cubrio el ataque`)
}
}
