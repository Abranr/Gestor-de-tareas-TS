//Definir la clase task
var Tarea = /** @class */ (function () {
    //constructor clase tarea
    function Tarea(descripcion) {
        this.descripcion = descripcion;
        this.completado = false;
    }
    //Metodo para marcar la tarea como completado
    Tarea.prototype.tareaCompletada = function () {
        this.completado = !this.completado;
    };
    return Tarea;
}());
export { Tarea };
