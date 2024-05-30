//Definir la clase task
export class Tarea{
    descripcion: string;
    completado: boolean;
    

    //constructor clase tarea
    constructor(descripcion: string){
        this.descripcion = descripcion;
        this.completado = false;

    }
    
//Metodo para marcar la tarea como completado
tareaCompletada(){
    this.completado = !this.completado;

}
}
