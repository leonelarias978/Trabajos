export
class personaje{
    protected nombre:string
    protected nivel:number
    protected puntosdevida:number

    constructor(nombre:string,nivel:number=1,puntosdevida:number=100){
        this.nombre=nombre;
        this.nivel=nivel;
        this.puntosdevida=puntosdevida;
    }

    atacar():void {
        console.log(`${this.nombre} A realizado un ataque`)
    }

    defender():void {
        console.log(`${this.nombre} Se ha defendido`)
    }
    
    Curar():void {
        console.log(`${this.nombre} se ha curado con una manzana dorada`)
    }
}