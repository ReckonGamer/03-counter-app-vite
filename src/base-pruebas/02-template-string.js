
export function getSaludo(nombre) { // Función para recibir el nombre.
    return 'Hola ' + nombre;
}

const nombre = "Pau";
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` ); // Llamamos a la función, y le pasamos nombre como parámetro.