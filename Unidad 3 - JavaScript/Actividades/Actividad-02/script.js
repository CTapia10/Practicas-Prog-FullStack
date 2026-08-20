// Actividad 2: cargar tareas guardadas (o array vacío si no hay nada)
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const guardarTodos = () => {
 localStorage.setItem("todos", JSON.stringify(todos))
};

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const lista = document.getElementById("todo-list");

const renderTodos = () => {
 lista.innerHTML = "";
 todos.forEach((todo) => {
   const li = document.createElement("li");
   li.textContent = todo.texto;
   li.setAttribute("id", todo.id);

   const btnEliminar = document.createElement("button");
   btnEliminar.textContent = "Eliminar";
   btnEliminar.addEventListener("click", () => eliminarTodo(todo.id));

   const toggle = document.createElement("input");
   toggle.setAttribute("type", "checkbox");
   toggle.checked = todo.completada;
   toggle.addEventListener("click", () => toggleTodo(todo.id));

   li.appendChild(toggle);
   li.appendChild(btnEliminar);
   lista.appendChild(li);
 });

};

const agregarTodo = (texto) => {
  const id = Date.now().toString();
  todos.push({ id, texto, completada: false });
  guardarTodos();
  renderTodos();

};

const eliminarTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    guardarTodos();
    renderTodos();
};

const toggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.completada = !todo.completada;
      guardarTodos();
      renderTodos();
    }
};

 
form.addEventListener("submit", (evento) => {
 // TODO: preventDefault, leer el input, si no está vacío llamar a agregarTodo y limpiar el input
 evento.preventDefault();

 const texto = input.value.trim();

 if (texto === "") {
   return;
 }

agregarTodo(texto);

 form.reset();
 
});

renderTodos();