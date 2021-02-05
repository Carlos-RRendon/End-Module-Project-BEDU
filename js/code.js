/*
Proyecto Final de Curso
Desarrollo Web: Programación con JavaScript
BEDU - Santander
Equipo 18
Integrantes:

* Jesus Omar Cervantes Gonzalez
* Sergio Alberto García Martínez
* Carlos Iván Ramírez Rendón
* Ricardo Ancona Castellanos


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
        
    //Contenedor de cada tarea
    let taskDiv = document.createElement('div');
    taskDiv.className += 'task'

    //Se define un objeto que contiene los tres elementos de cada tarea (un checkbox, un label y un boton de delete)
    let elementGroup = {
        checkboxBtn : document.createElement('input'),
        label : document.createElement('label'),
        button : document.createElement('button')
    };

    //Se agrega contenido al parrafo
    elementGroup.label.textContent = textBox.value;

    //Se elige el cambia el input por un checkbox y se le da el texto al boton de delete
   elementGroup.checkboxBtn.setAttribute('type','checkbox');
   elementGroup.button.textContent = 'Delete';

   //Agregar el event listener del checkbutton(elementGroup.checkBtn)
   elementGroup.checkboxBtn.addEventListener('change', function(){       
    let check = this.checked;
    elementGroup.label.style.textDecoration = check ?'line-through red' : '';       
   });

   //Agregar el eventlistener del boton remove para eliminar el task creado
   elementGroup.button.addEventListener('click', ()=>{
       taskDiv.remove();

       //Condicional para borrar el borde de las tareas cuando no haya
       if (taskContainer.children.length === 0){
           taskContainer.style.border = 'none';
       }
   });
   
   //Condicional solo para agregar las tareas si no estan vacias
   if (textBox.value !== ''){
       //Iterador para agregar cada propiedad del objeto, es decir cada elemento en el contenedor de cada tarea (taskDiv)
       Object.values(elementGroup).forEach(prop => {
           taskDiv.appendChild(prop);

        //Se agrega el contenedor de tarea(taskDiv) al contenedor padre que contiene todas las tareas (taskContainer)
        taskContainer.appendChild(taskDiv);
        taskContainer.style.border = '3px solid #aaa';
        });
   };

   
   
   
   //Se borra el contenido del input
   textBox.value = '';
   };

//Se agrega un event listener al objeto window para detectar los enter y agregar la tarea igual
 window.addEventListener('keydown',event => {
     if (event.key === 'Enter'){
         TaskCreator();
         };
     });





