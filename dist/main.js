//Importar la clase tarea desde task.js
import { Tarea } from './task.js';
//Obtener referencia a los elementos del DOM
const tareaForm = document.getElementById('task-form');
const tareaInput = document.getElementById('task-input');
const tareaList = document.getElementById('task-list');
//Crear array para almacenar las tareas
let tareas = [];
//Funcion para agregar nueva tarea
function addTask(descripcion) {
    //Crear instancia para nueva tarea
    const nuevaTarea = new Tarea(descripcion);
    //Agregar tarea al array de tareas
    tareas.push(nuevaTarea);
    //Actualizar la lista de tareas en el DOM
    renderTareas();
}
//Funcion para renderizar la lista de  tareas en el DOM
function renderTareas() {
    //Limpiar la lista de tareas en el DOM
    tareaList.innerHTML = '';
    //Iterar sobre todas las tareas
    tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.descripcion;
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.classList.add("eliminar-btn");
        eliminarBtn.addEventListener("click", () => {
            eliminarTarea(tarea);
        });
        if (tarea.completado) {
            li.classList.add("completada");
        }
        li.addEventListener("click", () => {
            tarea.tareaCompletada();
            renderTareas();
        });
        li.appendChild(eliminarBtn);
        tareaList.appendChild(li);
    });
}
function eliminarTarea(tareaEliminar) {
    tareas = tareas.filter(tarea => tarea !== tareaEliminar);
    renderTareas();
}
tareaForm.addEventListener("submit", event => {
    event.preventDefault();
    const descripcion = tareaInput.value.trim();
    if (descripcion !== '') {
        addTask(descripcion);
        tareaInput.value = "";
    }
});
renderTareas();
