# Gestor de Tareas 

Este proyecto es un simple gestor de tareas desarrollado en JavasScript, permitir a los usuarios agregar y eleimnar tareas.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `index.html`: Contiene la estructura básica de la página web con el formulario para agregar tareas y lista de tareas.
- `Style.css`: Archivo de estilos para dar formato a la página.
- `src/`
    - `tastk.ts`: Clase TypeScript para representar una tarea.
    - `main.ts`: Codigo principal TypeScript que maneja la lógica de la aplicación.

## Uso

Una vez que el proyecto este funcionando en el navegador, el usuario puede:

- Agregar nuevas tareas utilizando el formulario proporcionado.
- Marcar las tareas como completadas haciendo clic sobre la tarea correspondiente.
- Eliminar archivos haciendo clic en el botón de eliminar junto a cada tarea.

#Configuracion de TypeScript
El archivo `tsconfig.json` es utilizado para configurar el configurador TypeScript. Aquí están las principales opciones de configuración.

- `"Target: ES5"`: Indica que el codigo TypeScript se compilara a JavaScript compatible con ES5. Asegura una mayor compatibilidad con navegadores y entorno antiguo.
- `"module: ES6"`: Indica que se utilizaran modulos de ES6 en el codigo TypeScript. Esto permite utilizar las caracteristicas de importacion/exportacion de ES6 en tu codigo
- `"OutDir: "./dist"`: especificar el directorio de salida para los archivos compilador
- `"Strict: true"`: Habilitar todas las opciones estrictas del compilador de TypeScript para mejorar la seguridad y la calidad del codigo
- `"Include":["src/**/*.ts"]`: Especifica que todos los archivos TypeScript deben ser incluidos en la compilación
