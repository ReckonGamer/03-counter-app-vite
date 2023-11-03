import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await.js", () => {
    test("getImagen debe de retornar un error", async() => { // Hace una prueba asíncrona.
        const resp = await getImagen(); // Espera la respuesta de la función.
        expect( resp ).toBe('No se encontró la imagen'); // Espera a que la respuesta no encuentre la imagen.
    });
});