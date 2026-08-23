import './style.css'
import { obtenerPersonajes } from './api/personajes'
import type { Personaje } from './types/personaje'
const contenedor = document.querySelector<HTMLDivElement>('#personajes')!
const URL_IMAGENES = "https://cdn.thesimpsonsapi.com/500";
const crearTarjeta = (personaje: Personaje): HTMLDivElement => {
 const tarjeta = document.createElement('div') as HTMLDivElement
 tarjeta.classList.add('personaje-card')
 const imagen = document.createElement('img') as HTMLImageElement
 imagen.src = URL_IMAGENES + personaje.portrait_path
 imagen.alt = personaje.name
 tarjeta.appendChild(imagen)
 const nombre = document.createElement('h3') as HTMLHeadingElement
 nombre.textContent = personaje.name
 tarjeta.appendChild(nombre)
 const ocupacion = document.createElement('p') as HTMLParagraphElement
 ocupacion.textContent = personaje.occupation
 tarjeta.appendChild(ocupacion)
 const estado = document.createElement('p') as HTMLParagraphElement
 estado.textContent = personaje.status
 tarjeta.appendChild(estado)
 const edad = document.createElement('p') as HTMLParagraphElement
 edad.textContent = String(personaje.age)
 tarjeta.appendChild(edad)
 return tarjeta
}

const mostrarPersonajes = (personajes: Personaje[]): void => {
 personajes.forEach(personaje => {
  const tarjeta = crearTarjeta(personaje)
  contenedor.appendChild(tarjeta)
 })
}

const iniciar = async (): Promise<void> => {
 const personajes = await obtenerPersonajes()
 mostrarPersonajes(personajes)
}

iniciar()