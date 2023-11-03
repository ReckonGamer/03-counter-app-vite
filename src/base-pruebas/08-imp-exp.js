import heroes from '../data/heroes'; // Importamos los héroes desde otro archivo.

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id ); // Buscamos el héroe por su id.
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner ); // Filtramos el héroe por su propietario.