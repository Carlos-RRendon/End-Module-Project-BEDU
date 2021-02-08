/*
Proyecto Final de Curso
Desarrollo Web: Programación con JavaScript
BEDU - Santander
Equipo 18
Integrantes:

* Jesus Omar Cervantes Gonzalez
* Sergio Alberto García Martínez
* Carlos Iván Ramírez Rendón

Descripción: La aplicación a desarrollar será un “To do App” que cumpla con los siguientes user stories:

- Como usuario quiero agregar nuevas tareas a la lista.
- Como usuario quiero marcar una tarea como completada.
- Como usuario quiero eliminar una tarea que no necesite.

Todos los elementos visibles deben ser creados usando funciones de JavaScript, es decir, no se deben agregar o modificar etiquetas HTML.
*/


//Selector de contenedor padre, el unico elemento HTML div#app, se le agrega la clase container de Bootstrap
let parentContainer = document.getElementById('app');
parentContainer.className += 'container';


//Se crea el elemento del titulo H1 y se agrega al contenedor padre. Se le añaden las clases de bootstrap para centrar texto
let title = document.createElement('h1');
title.textContent = 'To Do App';
title.className += 'text-center my-5';

//Al contenedor app se le agrega el titulo
parentContainer.appendChild(title);

//Se crea el contenedor para el input y el boton de add, se le agregan las clases  de bootstrap para alinear
let textBoxContainer = document.createElement('div');
textBoxContainer.className += 'textbox-container d-flex justify-content-between align-items-center';
textBoxContainer.id = 'textbox-container';

//Creacion del input text y del boton add, se le agregan los estilos de boostrap con las clases
let textBox = document.createElement('input');
textBox.setAttribute('placeholder','New Task...');
textBox.className += 'form-control my-2';
let addButton = document.createElement('button');
addButton.textContent = 'Add';
addButton.className += 'btn btn-primary';


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
taskContainer.className += 'task-container mt-3';
parentContainer.appendChild(taskContainer);


//Se define una funcion para crear las tareas y agregarlas al contenedor de tareas (taskContainer)
function TaskCreator(){
        
    //Contenedor de cada tarea con las clases de bootstrap para estilos
    let taskDiv = document.createElement('div');
    taskDiv.className += 'task alert alert-info d-flex justify-content-between align-items-center';

    //Se define un objeto que contiene los tres elementos de cada tarea (un checkbox, un label y un boton de delete)
    let elementGroup = {
        checkboxBtn : document.createElement('input'),
        label : document.createElement('label'),
        button : document.createElement('button')
    };

    //Se agrega contenido al parrafo
    elementGroup.label.textContent = textBox.value;
    
    //Se elige el cambia el input por un checkbox y se le da el texto al boton de delete, ademas se le da color al boton con la clase de bootstrap
   elementGroup.checkboxBtn.setAttribute('type','checkbox');
   elementGroup.button.textContent = 'Delete';
   elementGroup.button.className += 'btn btn-danger';
   
   
   //Agregar el event listener del checkbutton(elementGroup.checkBtn)
   elementGroup.checkboxBtn.addEventListener('change', function(){
       
    //Se verifica el estado del boton
    let check = this.checked;

    //Se le dan estilos a las tareas para tachar visualmente una tarea hecha
     elementGroup.label.style.textDecoration = check ?'line-through red' : ''; 

     //Condicional para cambiar el color del contenedor de la tarea con las clases de bootstrap, azul sino esta completada, gris si esta completada
    if (check){
        taskDiv.classList.replace('alert-info','alert-dark');}
    else{
            taskDiv.classList.replace('alert-dark', 'alert-info');
        }
    
   });

   //Agregar el eventlistener del boton remove para eliminar el task creado
   elementGroup.button.addEventListener('click', ()=>{
       taskDiv.remove();
   });
   
   //Condicional solo para agregar las tareas si no estan vacias
   if (textBox.value !== ''){
       //Iterador para agregar cada propiedad del objeto, es decir cada elemento en el contenedor de cada tarea (taskDiv)
       Object.values(elementGroup).forEach(prop => {
           taskDiv.appendChild(prop);

        //Se agrega el contenedor de tarea(taskDiv) al contenedor padre que contiene todas las tareas (taskContainer)
        taskContainer.appendChild(taskDiv);
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

