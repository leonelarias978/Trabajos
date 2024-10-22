import { personaje } from "./personaje";

export class Mago extends personaje {
    constructor(nombre:string){
        super(nombre);
}

lanzar():void {
    console.log(`${this.nombre} lanzo una bola de fuego`)
}
Desvio():void {
    console.log(`${this.nombre} desvio el ataque`)
}

}

