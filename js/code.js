/*
Proyecto Final de Curso
Desarrollo Web: Programación con JavaScript
BEDU - Santander
Equipo 18
Integrantes:

* Carlos Iván Ramírez Rendón

Descripción: La aplicación a desarrollar será un “To do App” que cumpla con los siguientes user stories:

- Como usuario quiero agregar nuevas tareas a la lista.
- Como usuario quiero marcar una tarea como completada.
- Como usuario quiero eliminar una tarea que no necesite.
Todos los elementos visibles deben ser creados usando funciones de JavaScript, es decir, no se deben agregar o modificar etiquetas HTML.
*/


//Selector de contenedor padre, el unico elemento HTML div#app
let parentContainer = document.getElementById('app');
//parentContainer.style.border= '3px solid red';

//Se crea el elemento del titulo H1 y se agrega al contenedor padre
let title = document.createElement('h1');
title.textContent = 'To Do App';
parentContainer.appendChild(title);

//Se crea el contenedor para el input y el boton de add
let textBoxContainer = document.createElement('div');
textBoxContainer.className += 'textbox-container';

//Creacion del input text y del boton add
let textBox = document.createElement('input')
textBox.setAttribute('placeholder','New Task...') ;
let addButton = document.createElement('button');
addButton.textContent = 'Add';

//Se agregan los eventos al boton add (addButton)
addButton.addEventListener('click',() => {
    TaskCreator();
});


//Se agregan los elementos creados al contenedor
textBoxContainer.appendChild(textBox);
textBoxContainer.appendChild(addButton);

//Se agregan los nuevos elementos al contendor padre
parentContainer.appendChild(textBoxContainer);

//Se crea el contenedor para las task
let taskContainer = document.createElement('div');
taskContainer.className += 'task-container';
parentContainer.appendChild(taskContainer);


//Se define una funcion para crear las tareas y agregarlas al contenedor de tareas (taskContainer)
function TaskCreator(){

    let taskDiv = document.createElement('div');

    let elementGroup = {
        checkboxBtn : document.createElement('input'),
        label : document.createElement('label').appendChild(document.createTextNode(textBox.value)),
        button : document.createElement('button')
    };

   elementGroup.checkboxBtn.setAttribute('type','checkbox');
   elementGroup.button.textContent = 'Delete';

   Object.values(elementGroup).forEach(prop => {
       taskDiv.appendChild(prop);
   });

   taskContainer.appendChild(taskDiv);
   textBox.value = '';
   };

  

   

  
   





