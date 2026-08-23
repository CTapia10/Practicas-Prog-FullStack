import type { Personaje, RespuestaPersonajes } from '../types/personaje'
const URL_API = 'https://thesimpsonsapi.com/api/characters'
export const obtenerPersonajes = async (): Promise<Personaje[]> => {
 const response = await fetch(URL_API)
 const data = await response.json() as RespuestaPersonajes
 return data.results;
}