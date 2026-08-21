
const guardarCategorias = () => {
 localStorage.setItem("categorias", JSON.stringify(categorias))
};

const guardarProductos = () => {
    localStorage.setItem("productos", JSON.stringify(productos))
};

const listaCategorias = document.getElementById("lista-categorias");
const contenedorProductos = document.getElementById("contenedor-productos");

const cargarCategorias = () => {
    listaCategorias.innerHTML = "";
    categorias.forEach((categoria) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = categoria;
        li.appendChild(a);
        listaCategorias.appendChild(li);
    });
};

const cargarProductos = () => {
    contenedorProductos.innerHTML = "";
    productos.forEach((producto) => {
        const article = document.createElement("article");
        article.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>${producto.precio}$</p>
            <button onclick="alert('Producto ${producto.nombre} agregado al carrito')">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(article);
    });
};
    
cargarCategorias();
cargarProductos();


