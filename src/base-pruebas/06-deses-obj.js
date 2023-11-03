
export const usContext = ({ clave, edad }) => { // Pasamos un array, con diferentes variables.

    // console.log( nombre, edad, rango );
    
    return { // Devolvemos cada una de esas variables.
        nombreClave: clave, // Hacemos referencia a la variable clave.
        anios: edad,  // Hacemos referencia a la variable edad.
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}