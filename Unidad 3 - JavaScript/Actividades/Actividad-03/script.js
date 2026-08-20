const URL_API = "https://thesimpsonsapi.com/api/characters";
const URL_IMAGENES = "https://cdn.thesimpsonsapi.com/500";
const contenedor = document.getElementById("personajes");
// Actividad 1: TODO - función async que haga fetch a URL_API, convierta a JSON
// y muestre datos.results por consola
const obtenerPersonajes = async () => {
    const response = await fetch(URL_API);
    const datos = await response.json();
    console.log(datos.results);
    mostrarPersonajes(datos.results);
};
// Actividad 2: TODO - por cada personaje, crear un div.personaje-card con
// imagen (URL_IMAGENES + portrait_path), nombre, ocupación, status y edad,
// y agregarlo a contenedor
const mostrarPersonajes = (personajes) => {
    personajes.forEach((personaje) => {
        const card = document.createElement("div");
        card.classList.add("personaje-card");
        card.innerHTML = `
            <img src="${URL_IMAGENES}${personaje.portrait_path}" alt="${personaje.name}">
            <h2>${personaje.name}</h2>
            <p><strong>Ocupación:</strong> ${personaje.occupation}</p>
            <p><strong>Status:</strong> ${personaje.status}</p>
            <p><strong>Edad:</strong> ${personaje.age}</p>
        `;
        contenedor.appendChild(card);
    });
};
obtenerPersonajes()