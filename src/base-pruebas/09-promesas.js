import { getHeroeById } from './08-imp-exp'

export const getHeroeByIdAsync = ( id ) => { 

    return new Promise( (resolve, reject) => { // Devuelve una promesa, que espera a que se resuelva.

        setTimeout( () =>  {

            const p1 = getHeroeById( id ); // Recogemos el personaje por la id.

            if ( p1 ) { // Si existe ese héroe.
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' + id);
            }
        }, 1000);
    
    });


}


getHeroeByIdAsync(1)
    .then( console.log ) // Mostrará el resultado de la ejecución de la función.
    .catch( console.warn ); // En el caso de que haya fallos, mostrará el error.