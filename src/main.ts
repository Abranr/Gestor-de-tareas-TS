//Importar la clase tarea desde task.js
import { Tarea } from "./task.js";

//Obtener referencia a los elementos del DOM
const tareaForm: HTMLFormElement = document.getElementById('task-form') as HTMLFormElement;
const tareaInput: HTMLInputElement = document.getElementById('task-input') as HTMLInputElement;
const tareaList: HTMLUListElement = document.getElementById('task-list') as HTMLUListElement;

//Crear array para almacenar las tareas
let tareas: Tarea[] = [];

//Funcion para agregar nueva tarea
function addTask(descripcion: string): void{

    //Crear instancia para nueva tarea
    const nuevaTarea: Tarea = new Tarea(descripcion);

    //Agregar tarea al array de tareas
    tareas.push(nuevaTarea);

    //Actualizar la lista de tareas en el DOM
    renderTareas();
}

//Funcion para renderizar la lista de  tareas en el DOM
function renderTareas(): void{

    //Limpiar la lista de tareas en el DOM
    tareaList.innerHTML = '';

    //Iterar sobre todas las tareas
    tareas.forEach(tarea => {
        const li: HTMLLIElement = document.createElement("li");
        li.textContent = tarea.descripcion;

        

        const eliminarBtn: HTMLButtonElement = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.classList.add("eliminar-btn");
        eliminarBtn.addEventListener("click", () => {
            eliminarTarea(tarea);
        });

        if(tarea.completado){
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

function eliminarTarea(tareaEliminar: Tarea){
    tareas = tareas.filter(tarea => tarea !== tareaEliminar);
    renderTareas();
}

tareaForm.addEventListener("submit", event => {
    event.preventDefault();
    const descripcion: string = tareaInput.value.trim();

    if(descripcion !== ''){
        addTask(descripcion);
        tareaInput.value = "";
    }
   
})

renderTareas();