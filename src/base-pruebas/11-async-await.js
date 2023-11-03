export const getImagen = async() => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC'; // Recogemos la api key.
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`); // Juntamos nuestra api key, con el enlace de dónde sacaremos la información.
        const { data } = await resp.json();  // Guardaremos el JSON en una variable.

        const { url } = data.images.original; // El link será el original de las imágenes.

        const img = document.createElement('img'); // Creamos un elemento tipo imagen.
        img.src = url; // El source de la img será la url.
        document.body.append( img ); // Añadimos la img al final del cuerpo del documento.

    } catch (error) {
        // manejo del error
        // console.error(error)

        return "No se encontró la imagen";        
    }
}

getImagen();