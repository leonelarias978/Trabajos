import { personaje } from "./personaje";



export class Arquero extends personaje {
        constructor(nombre:string){
        super(nombre);
}

disparar():void {
    console.log(`${this.nombre} Disparo una flecha`)
}
Esquivar():void {
    console.log(`${this.nombre} Esquivo el ataque`)
}
}


