import { Paises } from "src/app/interfaces/paises";

export class Actor {
    //id:number;
    nombre:string;
    apellido:string;
    edad:number;
    nacionalidad:Paises
    /**
     *
     */
    constructor(apellido:string,nombre:string,edad:number,nacionalidad:Paises) {
        //this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nacionalidad = nacionalidad;        
    }
}