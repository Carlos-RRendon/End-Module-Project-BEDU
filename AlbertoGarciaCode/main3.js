//Selector de contenedor padre, el unico elemento HTML div#app
let container = document.getElementById('app');
let tareas = {};
const fragment = document.createDocumentFragment();
container.className= 'container';

//TÍTULO
let title = document.createElement('h1');
title.textContent = 'To Do App';
title.className = 'text-center my-5';
container.appendChild(title);

//FORM
let form = document.createElement('form');
form.className = 'd-flex justify-content-between align-items-center';
form.id += 'formulario';
container.appendChild(form);

//INPUT Y BUTTON
let input = document.createElement('input')
input.setAttribute('placeholder', 'Ingrese tarea');
input.className = 'form-control my-2';
let button = document.createElement('button');
button.textContent = 'Agregar';
button.className = 'btn btn-block btn-success';
button.type = "submit";

form.appendChild(input);
form.appendChild(button);

//CONTENEDOR TAREAS
let listaTarea = document.createElement('div');
listaTarea.className = 'mt-3';
container.appendChild(listaTarea);

//TEMPLATE
let temp = document.createElement('template');
temp.id = 'template';
container.appendChild(temp);
const template = document.getElementById('template').content;

let divTarea = document.createElement('div');
divTarea.className = 'alert alert-info d-flex justify-content-between align-items-center';
template.appendChild(divTarea);

let p = document.createElement('p');
p.textContent = 'Tarea #1';
p.className = 'm-0';
divTarea.appendChild(p);

let h3 = document.createElement('h3');
h3.className = 'm-0';
divTarea.appendChild(h3);

let check = document.createElement('i');
check.className = 'fas fa-check-circle text-success mx-3';
check.setAttribute("role", "button");
h3.appendChild(check);
let minus = document.createElement('i');
minus.className = 'fas fa-minus-circle text-danger';
minus.setAttribute("role", "button");
h3.appendChild(minus);
//<i class="fas fa-trash"></i>

listaTarea.addEventListener("click", e => {
    btnAction(e);
})
formulario.addEventListener("submit", e => {
    //cada vez que se quiera evitar el comportamiento por defecto de un elemento en HTML se utiliza
    //evita un comportamiento de html que lo tienen por defecto
    e.preventDefault(); //no hacer lo que tenga por defecto, hacerlo a nuestra manera
    //console.log(e.target[0].value);
    //console.log(input.value);
    setTarea(e);
});

const setTarea = e => {
    if(input.value.trim() === ''){
        console.log('vacío');
        return //para que se salga y no imprima el console de abajo
    }
    //console.log('diste click');

    //se crea la tarea con el texto ingresado
    const tarea = {
        id: Date.now(), //para hacer un id único
        texto: input.value,
        estado: false
    }

    //agregamos la tarea en el objeto
    tareas[tarea.id] = tarea;
    //console.log(tareas)

    formulario.reset(); //limpiar formulario
    input.focus(); //focus cuando haya dado click

    pintarTareas();
}

const pintarTareas = () => {
    //limpiar el dom para que no se repitan (parta en 0)
    listaTarea.innerHTML = '';

    Object.values(tareas).forEach(tarea => {
        //clonar el template para poder modificar
        const clone = template.cloneNode(true) 
        clone.querySelector('p').textContent = tarea.texto;

        if(tarea.estado){
            clone.querySelector('.alert').classList.replace('alert-info', 'alert-secondary');
            clone.querySelector('p').style.textDecoration = 'line-through';
        }

        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id;
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id;

        //se agrega al fragment
        fragment.appendChild(clone);
    });
    listaTarea.appendChild(fragment); //ya con la info actualizada
}

const btnAction = e => {
    if(e.target.classList.contains('fa-check-circle')){
        //console.log(e.target.dataset.id);
        tareas[e.target.dataset.id].estado = true;
        pintarTareas();
        console.log(tareas)
    }

    if(e.target.classList.contains('fa-minus-circle')){
        delete tareas[e.target.dataset.id];
        pintarTareas();
        console.log(tareas)
    }
    //evita activar los eventListener fuera del container
    e.stopPropagation();
}

